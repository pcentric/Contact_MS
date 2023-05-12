import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" h-screen bg-gray-800 w-64 text-white flex flex-col">
      <div className="p-4 font-bold">CMS</div>
      <ul className="flex flex-col">
        <Link to="/" className="p-4 hover:bg-gray-700 cursor-pointer">
          Contact
        </Link>
        <Link to="Map&Charts" className="p-4 hover:bg-gray-700 cursor-pointer">
          Maps and Charts
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
