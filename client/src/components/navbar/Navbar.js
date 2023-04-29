import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false: true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? "Navbar scrolled": "Navbar" }>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="navbarImages"/>
          <Link to="/" className="link">
            <span>HomePage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icons"/>
          <span>KID</span>
          <NotificationsIcon className="icons"/>
          <img src="https://cdn.pixabay.com/photo/2019/09/14/09/44/cat-4475583_960_720.png" alt="" className="navbarImages"/>
          <div className="profile">  
            <KeyboardArrowDownIcon className="icons"/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
