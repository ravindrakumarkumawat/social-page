import { MenuOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { Menu, Dropdown } from "antd";
import React from "react";
import "./Navbar.css";
import NormalRow from "../common/NormalRow";
import NormalCol from "../common/NormalCol";
// import "./Navbar1.css";
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        One new friend request
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        John Doe posted on your wall
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Jane likes your post
      </a>
    </Menu.Item>
  </Menu>
);
const Navbar = () => {
  const handleActive = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <>
      <NormalRow>
        <NormalCol span={24}>
          <div className="topnav" id="myTopnav">
            <a href="#" className="bar-item button padding-large theme-d4">
              <i className="fa fa-home margin-right"></i>Logo
            </a>
            <a
              href="#"
              className="bar-item button hide-small padding-large hover-white"
              title="News"
            >
              <i className="fa fa-globe"></i>
            </a>
            <a
              href="#"
              className="bar-item button hide-small padding-large hover-white"
              title="Account Settings"
            >
              <i className="fa fa-user"></i>
            </a>
            <a
              href="#"
              className="bar-item button hide-small padding-large hover-white"
              title="Messages"
            >
              <i className="fa fa-envelope"></i>
            </a>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <a>
                <i className="fa fa-bell"></i>
                <span className="badge right small green">3</span>
              </a>
            </Dropdown>
            <a
              href="javascript:void(0);"
              className="icon"
              onClick={handleActive}
            >
              <MenuOutlined />
            </a>
            <a className="icon1">
              <Avatar />
            </a>
          </div>
        </NormalCol>
      </NormalRow>
    </>
  );
};

export default Navbar;

// <div className="navbar">
// <div className="navbar-left">
//   <div>
//     <a href="#" className="">HOME</a>
//   </div>
//   <div className="hide">
//     <a href="#band" className="">BAND</a>
//   </div>
//   <div className="hide">
//     <a href="#tour" className="">TOUR</a>
//   </div>
//   <div className="hide">
//     <a href="#contact" className="">CONTACT</a>
//   </div>
// </div>
// <div className="navbar-right">
//   <div className="hide"><SearchOutlined /></div>
//   <div className="bar-menu show"><MenuOutlined /></div>
// </div>
// </div>
