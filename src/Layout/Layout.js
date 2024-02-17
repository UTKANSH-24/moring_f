import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Layout.css'
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  const role = useSelector((state) => state?.auth?.role);

  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  };

  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    const res = dispatch(logout());
    if (res?.payload?.success) navigate("/");
  };

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute z-50 right-0 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative" onClick={changeWidth} style={{padding:'5px'}}>
            <FontAwesomeIcon icon={faBars}  style={{ marginRight: '18px', marginTop: '23px' }} />
          </label>
        </div>

        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
            <div className="hidden-div">
              <li><Link style={{ textDecoration: 'none' }} to="/" >Home</Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/Gallery" >Gallery</Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/clubsandevent" >Events</Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/megaevent" >Mega Events</Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/merchandise" >Merchandise</Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/accomodationPage" >Accommodation</Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/TeamMembers" >Team Members</Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/FacultyCoordinators" >Faculty Coordinator </Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/Developers" >Developers</Link></li>
              <li><Link style={{ textDecoration: 'none' }} to="/Contacts" >Contact us</Link></li>

            </div>

            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>

            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/admin/dashboard"}>Events Dashboard</Link>
              </li>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/admin/merchandise"}>Merchandise Dashboard</Link>
              </li>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/admin/accommodation"}>Accomodation Dashboard</Link>
              </li>
            )}

            {isLoggedIn && role === "USER" && (
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/user/dashboard"}>My Events</Link>
              </li>
            )}
            {isLoggedIn && role === "USER" && (
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/merchandise/myOrders"}>My Orders</Link>
              </li>
            )}
            {isLoggedIn && role === "USER" && (
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/accommodation/myBookings"}>My Bookings</Link>
              </li>
            )}


            {isLoggedIn && role === "COORDINATOR" && (
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/admin/dashboard"}>COORDINATOR Dashboard</Link>
              </li>
            )}
           
            {
              isLoggedIn &&
              role === 'ADMIN' &&
              (
                <li>
                  <Link style={{ textDecoration: 'none' }} className="text-decoration-none no-underline" to={"/contact/newQuery"}>New Queries</Link>
                </li>
              )
            }

            {/* answered */}
            {
              isLoggedIn &&
              role === 'ADMIN' &&
              (
                <li>
                  <Link style={{ textDecoration: 'none' }} className="text-decoration-none no-underline" to={"/contact/answeredQuery"}>Old Queries</Link>
                </li>
              )
            }
            {isLoggedIn && (
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/user/profile"}>My Profile</Link>
              </li>
            )}




            <li className="absolute bottom-4 w-[90%] flex flex-wrap justify-center bottom-0">
              {!isLoggedIn ? (
                <>
                  <button className="btn btn-green">
                    <Link style={{ textDecoration: 'none' }} to={"/login"}>Login / Signup</Link>
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-red">
                    <Link style={{ textDecoration: 'none' }} onClick={handleLogout}>Logout</Link>
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Layout;
