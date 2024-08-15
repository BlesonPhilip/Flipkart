import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import GetAppIcon from '@mui/icons-material/GetApp';
import './MoreT.css'
const MoreT = () => {
  return (
    <div className="moret">

     <div className ="moret__in">
        <NotificationsIcon />
        <p>Notification Preference</p>
     </div>
     <hr/>
     <div className ="moret__in">
        <MonetizationOnIcon />
        <p>Sell on Flipkart</p>
     </div>
     <hr/>

     <div className ="moret__in">
        <LiveHelpIcon />
        <p>24x7 Customer Care</p>
    </div>
    <hr/>

     <div className ="moret__in">
        <TrendingUpIcon  />
        <p>Advertise</p>
     </div>
     <hr/>

     <div className ="moret__in">
        <GetAppIcon />
        <p>Download App</p>
     </div> 
     <hr/>    

    </div>
  )
}

export default MoreT
