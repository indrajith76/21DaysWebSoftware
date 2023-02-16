import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [sidebarOn, setSidebarOn] = useState(false);
  return (
    <section>
      <div className="bg-slate-200 flex items-center justify-between px-5 py-3">
        <div className="flex items-center">
          <label onClick={()=>setSidebarOn(!sidebarOn)} htmlFor="my-drawer">{sidebarOn ? <FiX /> : <FiMenu />}</label>
          <h2 className="text-2xl font-bold text-slate-800 ml-2">21Days</h2>
        </div>
        <div>username</div>
      </div>
    </section>
  );
};

export default Navbar;
