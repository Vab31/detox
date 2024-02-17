// NavBar.js
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-blue-700 p-4 w-full top-0 flex justify-center items-center text-white">
      <div className="text-center flex flex-col md:flex-row">
        <div className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer inline-block mb-2 md:mb-0">
        <a href="/form">  Register Now </a>
        </div>
        <div className="text-lg mt-2 md:ml-5">
          <span className="line-through md:inline">Rs.1999</span>{" "}
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;



