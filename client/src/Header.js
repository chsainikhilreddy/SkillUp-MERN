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
// import { LinkContainer } from 'react-router-bootstrap';
// import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BsBook} from 'react-icons/bs';
import { CgProfile} from 'react-icons/cg';
import {GiAchievement} from 'react-icons/gi';
// import {Nav } from 'react-bootstrap';
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";





// export default class Header extends Component {
const Header = () => {
  // render() {
    // document.getElementById("sendingToHome").click();
    var userName = "Benitha";
    const history = useHistory();
    // var email;
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
      // console.log("hi");
      // const el = document.getElementById("sendingToHome");
      // console.log(el.children);
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    function mySubmitHandler(e) {
      e.preventDefault();
      alert("Are you sure to logout from the application?");
      localStorage.clear();
      history.push('/login');
    }
    function initialize() {
      // console.log(localStorage.getItem("user_auth_token"));
      userName = localStorage.getItem("user_name");
      // email = localStorage.getItem("user_auth_token");
      
    }
    initialize();
    return (
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Menu" : "Hiii " + userName + "!"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
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


        // <div id="header">
        //     {/* collapsed props to change menu size using menucollapse state */}
        //   <ProSidebar collapsed={menuCollapse}>
        //     <SidebarHeader>
        //     <div className="logotext">
        //         {/* small and big change using menucollapse state */}
        //         <p>{menuCollapse ? "Menu" : "Hiii " + userName + "!"}</p>
        //       </div>
        //       <div className="closemenu" onClick={menuIconClick}>
        //           {/* changing menu collapse icon on click */}
        //         {menuCollapse ? (
        //           <FiArrowRightCircle/>
        //         ) : (
        //           <FiArrowLeftCircle/>
        //         )}
        //       </div>
        //     </SidebarHeader>
        //     <SidebarContent>
        //       <Menu iconShape="square">
        //         <MenuItem icon={<Link to='/MainPage'><FiHome /></Link>} id = "sendingToHome">Home</MenuItem>
        //         <MenuItem icon={ <Link to='AvailableCourses'><BsBook /></Link>}>Available Courses</MenuItem>
        //         <MenuItem icon = { <Link to='/profile'><CgProfile /></Link>}> Profile</MenuItem>
        //         <MenuItem icon = { <Link to='/aboutus'><RiPencilLine /></Link>}> AboutUs</MenuItem>
        //       </Menu>
        //     </SidebarContent>
        //     <SidebarFooter>
        //       <Menu iconShape="square">
        //         <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
        //       </Menu>
        //     </SidebarFooter>
        //   </ProSidebar>
        // </div>
    );
  // }
};

export default Header;