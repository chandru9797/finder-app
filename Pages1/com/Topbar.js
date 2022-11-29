import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/Authcontact';


function Topbar() {

  const {logout} = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async() => {
    try{
      await logout()
      navigate('/')
      console.log('loggedout')
    }catch(e){
      console.log(e.message)
    }
  }
  return (
    <div className='topbarcontainer'>
        <div className="topbarleft">
          <span className="logo">Find<span className='er'>Er</span></span>
        </div>
        <div className="topbarcenter">
          <div className="searchbar">
            <SearchIcon className='searchicon'/>
            <input type="text" className='searchinput' placeholder='Search for friend,post or video'/>
          </div>
        </div>
        <div className="topbarright">
          <div className="topbarlinks">
            <span className="topbarlink">Homepage</span>
            <button className="topbarbutton" onClick={handleLogout}>Logout</button>
          </div>
          <div className="topbaricons">
             <div className="topbariconitem">
               <Person2Icon/>
               <span className='topbariconName'>1</span>
             </div>
             <div className="topbariconitem">
               <ChatIcon/>
               <span className='topbariconName'>2</span>
             </div>
             <div className="topbariconitem">
               <NotificationsIcon/>
               <span className='topbariconName'>1</span>
             </div>
          </div>
          <img src='/assests/1.jpeg' alt='' className='topbarimg'/>
        </div>
       </div>
  )
}

export default Topbar