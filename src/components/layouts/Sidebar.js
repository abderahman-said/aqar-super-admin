import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/SideMenu.css";
import Cookies from "js-cookie";
import {
  MdDashboard,
  MdOutlinePrivacyTip,
  MdOutlineLanguage,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosContact, IoMdSettings } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuTableProperties } from "react-icons/lu";
import { VscTypeHierarchySub } from "react-icons/vsc";
import logo from "../../images/icon_logo.png";
import { FaHouseUser } from "react-icons/fa6";
import { TbBuildingCommunity } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";
import { RiDeleteBin6Line, RiMoneyDollarCircleLine } from "react-icons/ri";

const Sidebar = ({ children }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const isLoginPage = location.pathname.includes("/login");

  const handleLogout = () => {
    Cookies.remove("aqarToken");
    window.location.reload();
  };

  const sidebarLinks = [
    { to: "/", icon: <MdDashboard />, label: "Dashboard" },
    { to: "/Properties", icon: <LuTableProperties />, label: "Properties" },
    { to: "/Ads", icon: <HiOutlineBuildingOffice2 />, label: "Ads" },
    { to: "/Location", icon: <IoLocationOutline />, label: "Location" },
    { to: "/AddType", icon: <VscTypeHierarchySub />, label: "Add Type" },
    { to: "/Languages", icon: <MdOutlineLanguage />, label: "Languages" },
    { to: "/Spciality", icon: <MdOutlinePrivacyTip />, label: "Spciality" },
    { to: "/Contacts", icon: <IoIosContact />, label: "Contacts" },
    { to: "/Newsletter", icon: <FaRegNewspaper />, label: "Newsletter" },
    { to: "/Agents", icon: <FaHouseUser />, label: "Agents" },
    { to: "/Agencies", icon: <TbBuildingCommunity />, label: "Agencies" },
    { to: "/MyProfile", icon: <ImProfile />, label: "My Profile" },
    { to: "/Admins", icon: <MdOutlineAdminPanelSettings /> , label: "Admins  " },
    { to: "/AdsAqar", icon: <TbBuildingCommunity /> , label: "Ads of Aqar corp" },
    { to: "/MyDeleted", icon: <RiDeleteBin6Line /> , label: "My Deleted" },
    { to: "/RealEstateFinance", icon: <RiMoneyDollarCircleLine  /> , label: "Real Estate Finance" },
    { to: "/Setting", icon: <IoMdSettings />, label: "Setting" },
  ];
  
  return (
    <div style={{ display: isLoginPage ? "none" : "flex", overflow: "hidden" }}>
      <div className={`sidebar ${isOpen ? "SideActive" : "SideNormal"}`}>
        <div className="top_section">
           
          <div className={`bars ${!isOpen ? "BarsActive" : "BarsNone"}`}>
            <img
              alt="logo"
              src={logo}
              className="logo_"
              width={61}
              height={61}
              onClick={toggleSidebar}
            />
            <span className="icon-menu" onClick={toggleSidebar}></span>
          </div>
          <div
            className="close"
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
          >
            <span
              className="icon-close"
              onClick={() => setIsOpen(false)}
            ></span>
          </div>
        </div>

        {sidebarLinks.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className="link"
            style={{ justifyContent: isOpen ? "flex-start" : "center" }}
          >
            {icon}
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {label}
            </div>
          </NavLink>
        ))}

        <NavLink
          to={"/login"}
          className="link"
          style={{ justifyContent: isOpen ? "flex-start" : "center" }}
          onClick={handleLogout}
        >
          <div className="icon">
            <span className="icon-exit"></span>
          </div>
          <div
            style={{ display: isOpen ? "block" : "none", cursor: "pointer" }}
            className="link_text"
          >
            Logout
          </div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
