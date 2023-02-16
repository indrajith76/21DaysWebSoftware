import React, { useContext } from "react";
import { MdOutlineDashboard, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const sidebarData = [
    { text: "Dashboard", link: "/", icon: <MdOutlineDashboard /> },
    { text: "Dashboard", link: "/", icon: <MdOutlineDashboard /> },
    { text: "Dashboard", link: "/", icon: <MdOutlineDashboard /> },
    { text: "Dashboard", link: "/", icon: <MdOutlineDashboard /> },
  ];
  return (
    <ul className="menu p-4 w-64 bg-slate-100 text-base-content">
      {sidebarData.map((data, idx) => (
        <li key={idx}>
          <Link to={data.link}>
            {data.icon} {data.text}
          </Link>
        </li>
      ))}
      <li>
        <button onClick={() => logOut()} className="bg-red-600 text-white">
          <MdLogout /> LogOut{" "}
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
