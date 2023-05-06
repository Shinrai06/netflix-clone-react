import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MailIcon from '@mui/icons-material/Mail';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">
                Dashboard
            </h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <LineStyleIcon className='sidebarIcon'/>
                    Home
                </li>
                <li className="sidebarListItem">
                    <TimelineIcon className='sidebarIcon'/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUpIcon className='sidebarIcon'/>
                    Sales
                </li>
            </ul>     
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">
                Quick Menu
            </h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <PersonIcon className='sidebarIcon'/>
                    Users
                </li>
                <li className="sidebarListItem">
                    <InventoryIcon className='sidebarIcon'/>
                    Products
                </li>
                <li className="sidebarListItem">
                    <AttachMoneyIcon className='sidebarIcon'/>
                    Transcripts
                </li>
                <li className="sidebarListItem">
                    <QueryStatsIcon className='sidebarIcon'/>
                    Reports
                </li>
            </ul> 
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">
                Notifications
            </h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MailIcon className='sidebarIcon'/>
                    Mail
                </li>
                <li className="sidebarListItem">
                    <QuickreplyIcon className='sidebarIcon'/>
                    Feedback
                </li>
                <li className="sidebarListItem">
                    <ChatBubbleIcon className='sidebarIcon'/>
                    Messages
                </li>
            </ul> 
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">
                Settings
            </h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <ManageAccountsIcon className='sidebarIcon'/>
                    Manage
                </li>
                <li className="sidebarListItem">
                    <AnalyticsIcon className='sidebarIcon'/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <ReportIcon className='sidebarIcon'/>
                    Reports
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
