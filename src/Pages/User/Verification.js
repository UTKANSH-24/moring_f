import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { verifyAccount } from "../../Redux/authSlice";

const Verifyaccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    
    verificationToken: useParams().verificationToken,
  });

  

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!data.verificationToken) {
      toast.error("Invalid Link");
      return;
    }

    
    const res = await dispatch(verifyAccount(data));
       console.log("verification response",res.payload.success);

    if (res.payload.success) {
      navigate("/login");
    }
  };

  return (
    <>
      {/* forget password container */}
      <div
        // onSubmit={handleFormSubmit}
        className="flex items-center justify-center h-[100vh]"
      >
        {/* forget password card */}
        <form className="flex flex-col justify-center gap-6 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Verify Account</h1>

          <div className="flex flex-col gap-1">
            {/* <label className="text-lg font-semibold" htmlFor="email">
              New Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your new password"
              className="bg-transparent px-2 py-1 border"
              value={data.password}
              onChange={handleUserInput}
            /> */}
          </div>

          <div className="flex flex-col gap-1">
            {/* <label className="text-lg font-semibold" htmlFor="cnfPassword">
              Confirm New Password
            </label>
            <input
              required
              type="password"
              name="cnfPassword"
              id="cnfPassword"
              placeholder="Confirm your new password"
              className="bg-transparent px-2 py-1 border"
              value={data.cnfPassword}
              onChange={handleUserInput}
            /> */}
          </div>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            onClick={handleFormSubmit}
          >
            Verify
          </button>
        </form>
      </div>
    </>
  );
};

export default Verifyaccount;
