import React from 'react'
import Topbar from '../com/Topbar'
import Rightbar from '../rightbar/Rightbar'
import Leftbar from '../leftbar/Leftbar'
import Feed from '../feed/Feed'
import "./profile.css"

function Profile() {
  return (
    <>
    <Topbar/>
    <div className='profile'>
       <Leftbar/>
       <div className='profileRight'>
        <div className='profileRightTop'>
         <div className='profileCover'>
         <img className='profileCoverImg'  src="assests/13.jpeg" alt=""/>
         <img className='profileUserImg'  src="assests/7.jpeg" alt=""/>
         </div>
         <div className='profileInfo'>
            <h4 className='profileInfoName'>kishore kanil</h4>
            <span className='profileInfoDesc'>hello my friends</span>
         </div>
         </div>
        <div className='profileRightBottom'>
        <Feed/>
       <Rightbar/>
        </div>
       
       </div>
       
    </div>
    </>
  )
}

export default Profile