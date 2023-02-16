import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const [sidebarOn, setSidebarOn] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <section>
      <div className="bg-slate-200 flex items-center justify-between px-5 py-3">
        <div className="flex items-center">
          <label className="block lg:hidden" onClick={() => setSidebarOn(!sidebarOn)} htmlFor="my-drawer">
            {sidebarOn ? <FiX /> : <FiMenu />}
          </label>
          <h2 className="text-2xl font-bold text-slate-800 ml-2">21Days</h2>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="flex items-center hover:cursor-pointer">
            <p className="border border-slate-600 p-1 rounded-full mr-2">
              <FiUser />
            </p>
            <p>{user?.displayName}</p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li className="bg-red-600 text-white rounded-lg">
              <button>
                LogOut <MdLogout />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
