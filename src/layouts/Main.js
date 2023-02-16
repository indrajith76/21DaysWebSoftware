import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { MdOutlineDashboard } from "react-icons/md";

const Main = () => {
  const sidebarData = [
    { text: "Dashboard", link: "/dashboard", icon: <MdOutlineDashboard /> },
  ];
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* main content */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 bg-slate-100 text-base-content">
            {sidebarData.map((data) => (
              <li>
                <Link to={data.link}>
                  {data.icon} {data.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
