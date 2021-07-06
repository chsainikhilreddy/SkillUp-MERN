import React, { useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BsBook} from 'react-icons/bs';
import { CgProfile} from 'react-icons/cg';
import {GiAchievement} from 'react-icons/gi';
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
    var userName = "Benitha";
    const history = useHistory();
    // var email;
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    function mySubmitHandler(e) {
      e.preventDefault();
      alert("Are you sure to logout from the application?");
      localStorage.clear();
      history.push('/login');
    }
    function initialize() {
      userName = localStorage.getItem("user_name");
    }
    initialize();
    return (
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? "Menu" : "Hi " + userName + "!"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<Link to='/MainPage'><FiHome /></Link>}>Home</MenuItem>
              <hr style={{ blockSize: "5px", backgroundColor: "white"}}/>
              <MenuItem icon={ <Link to='/AvailableCourses'><BsBook /></Link>}>Available Courses</MenuItem>
              <hr style={{ blockSize: "5px", backgroundColor: "white"}}/>
              <MenuItem icon = { <Link to='/profile'><CgProfile /></Link>}> Profile</MenuItem>
              <hr style={{ blockSize: "5px", backgroundColor: "white"}}/>
              <MenuItem icon = { <Link to='/aboutus'><RiPencilLine /></Link>}> AboutUs</MenuItem>
              <hr style={{ blockSize: "5px", backgroundColor: "white"}}/>
              <MenuItem icon = { <Link to='/Accomplishments'><GiAchievement /></Link>}> Accomplishments</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem onClick={mySubmitHandler} icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    );
};

export default Header;