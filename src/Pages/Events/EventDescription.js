import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";

const CourseDescription = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { role, data } = useSelector((state) => state.auth);

  useEffect(() => {
    // scroll to the top on page render
    window.scrollTo(0, 0);
  }, []);

  return (

    <>
      <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
        {/* displaying the course details */}
        <div className="grid grid-cols-2 gap-10 py-10 relative">
        </div>
      </div>
    </>

  );
};

export default CourseDescription;
