import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import EventList from "./Pages/Events/EventList";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Checkout from "./Pages/Payment/Checkout";
import CheckoutSuccess from "./Pages/Payment/CheckoutSuccess";
import CheckoutFail from "./Pages/Payment/CheckoutFail";
import ForgetPassword from "./Pages/Password/ForgetPassword";
import ResetPassword from "./Pages/Password/ResetPassword";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import MerchandiseDashboard from "./Pages/Dashboard/MerchandiseDashboard";
import EventDescription from "./Pages/Events/EventDescription";
import Profile from "./Pages/User/Profile";
import ChangePassword from "./Pages/Password/ChangePassword";
import EditProfile from "./Pages/User/EditProfile";
import CreateEvent from "./Pages/Events/CreateEvent";
import AddParticipant from "./Pages/Dashboard/AddParticipant";
import Addclubcoordinator from "./Pages/Dashboard/Addclubcoordinator";
import Addtcacoordinator from "./Pages/Dashboard/Addtcacoordinator";
import DisplayParticipants from "./Pages/Dashboard/DisplayParticipants";
import DisplayUnverifiedParticipants from "./Pages/Dashboard/DisplayUnverifiedParticipants";
import Displayclubcoordinator from "./Pages/Dashboard/Displayclubcoordinator";
import Displaytcacoordinator from "./Pages/Dashboard/Displaytcacoordinator";
import RequireAuth from "./Components/Auth/RequireAuth";
import NotRequireAuth from "./Components/Auth/NotRequireAuth";
import Denied from "./Pages/Denied";
import AccomodationDashboard from "./Pages/Dashboard/AccomodationDashboard";
import DisplayMerchandise from "./Pages/Dashboard/DisplayMerchandise";
// userside
import TeamMembers from "./USER/members/member";

import AccomodationPage from './USER/Accomodation/Accomodation';
import Merchandise from './USER/Merchandise/Tshirt';
import MerchandiseForm from './USER/Merchandise/Checkout';
import Tshirtdetails from './USER/Merchandise/Tshirtdetails';
import Homepage from './USER/HomePage/Homepage';
import ContactSection from "./USER/Contact/Contact";
import AllEvent from "./USER/clubs and event/AllEvent";
import BhangraClub from "./USER/clubs and event/Bhangra";

import Dance from "./USER/clubs and event/Dance";
import Fas from "./USER/clubs and event/Fas";
import Ladc from "./USER/clubs and event/Ladc";
import Movie from "./USER/clubs and event/Movie";
import Music from "./USER/clubs and event/Music";
import Panche from "./USER/clubs and event/Panche";
import PhotoClub from "./USER/clubs and event/PhotoClub";
import Quest from "./USER/clubs and event/Quest";
import Rajbhasha from "./USER/clubs and event/Rajbhasha";
import Sanskriti from "./USER/clubs and event/Sanskriti";

import Drama from "./USER/clubs and event/Drama";
import Gallery from "./USER/clubs and event/Gallery";
import Developers from "./USER/members/Developers";
import FacultyCoordinators from "./USER/members/FacultyCoordinators";
// import Registrationform from "./Pages/Dashboard/Registrationform";
import EventRegistrationForm from "./Pages/Dashboard/EventRegistrationForm";
import AccomodationRegistrationForm from "./Pages/Dashboard/AccomodationRegistrationForm";
import Pronight from "./USER/Pro-Night/Pronight";
import Schedule from "./USER/Schedule/Schedule";
import Pronightmainpage from "./USER/Pro-Night/Pronightmainpage";
// userside end

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<HomePage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

        <Route element={<NotRequireAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["USER", "ADMIN", "COORDINATOR"]} />}>
          <Route path="/event/description" element={<EventDescription />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/checkout/fail" element={<CheckoutFail />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/editprofile" element={<EditProfile />} />
          <Route path="/event/displayparticipants" element={<DisplayParticipants />} />
          <Route path="/event/displayUnverifiedparticipants" element={<DisplayUnverifiedParticipants />} />
          <Route path="/event/displayclubcoordinator" element={<Displayclubcoordinator />} />
          <Route path="/event/displaytcacoordinator" element={<Displaytcacoordinator />} />
          <Route path="/event/registeraccomodation/:palnId" element={<AccomodationRegistrationForm />} />
        </Route>
        <Route path="/event/registerinevent/:eventId" element={<EventRegistrationForm />} />




        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/accomodation" element={<AccomodationDashboard />} />
          <Route path="/admin/merchandise" element={<MerchandiseDashboard />} />
          <Route path="/event/AddParticipant" element={<AddParticipant />} />
          <Route path="/event/addclubcoordinator" element={<Addclubcoordinator />} />
          <Route path="/event/addtcacoordinator" element={<Addtcacoordinator />} />
          <Route path="/event/createevent" element={<CreateEvent />} />

          <Route path="/admin/merchandise/verification/:clothId/:verified" element={<DisplayMerchandise />} />

        </Route>

        <Route path="*" element={<NotFound />} />




        <Route path="/" element={<Homepage />} />
        <Route path="/clubsandevent" element={<AllEvent />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/merchandise/tshirtdetails/:id" element={<Tshirtdetails />} />
        <Route path="/merchandise/tshirtdetails/checkout/:id" element={<MerchandiseForm />} />
        <Route path="/accomodationPage" element={<AccomodationPage />} />
        <Route path="/TeamMembers" element={<TeamMembers />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/FacultyCoordinators" element={<FacultyCoordinators />} />
        <Route path="/Contacts" element={<ContactSection />} />
        <Route path="/Clubevents/BhangraClub" element={<BhangraClub />} />
        <Route path="/Clubevents/Dance" element={<Dance />} />
        <Route path="/Clubevents/Drama" element={<Drama />} />
        <Route path="/Clubevents/Fas" element={<Fas />} />
        <Route path="/Clubevents/Ladc" element={<Ladc />} />

        <Route path="/Clubevents/Movie" element={< Movie />} />

        <Route path="/Clubevents/Music" element={<Music />} />
        <Route path="/Clubevents/Panache" element={<Panche />} />
        <Route path="/Clubevents/PhotoClub" element={<PhotoClub />} />
        <Route path="/Clubevents/Quest" element={< Quest />} />
        <Route path="/Clubevents/Rajbhasha" element={< Rajbhasha />} />
        <Route path="/Clubevents/Sanskriti" element={< Sanskriti />} />
        <Route path="/Gallery" element={< Gallery />} />
        <Route path="/schedule" element={< Schedule />} />
        <Route path="/megaevent" element={< Pronightmainpage />} />




      </Routes>
    </>
  );
};

export default App;
