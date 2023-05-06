import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className='logo'>
            NetFlix
            </span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsIcon />
              <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
              <LanguageIcon />
            </div>
            <div className="topbarIconContainer">
              <SettingsIcon />
            </div>
            <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1682257275/DBD_LAB/Dr_Stone_1_r8h27d.jpg" alt="" className="topAvatar" />
          </div>
        </div>
    </div>
  )
}

export default Topbar
