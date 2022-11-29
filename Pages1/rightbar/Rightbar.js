import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummydata"
import Online from '../online/Online'

function Rightbar() {
    
  return(
    <div className='rightbar'>
        <div className='rightbarWrapper'>
           <div className='birthdayContainer'>
             <img src="assests/gift.png" className='birthdayImg' alt=""/>
             <span className='birthdayText'>
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
             </span>
           </div>
           <img className='rightbarAd' src='assests/ad.png' alt=''/>
           <h4 className='rightbarTitle'> Online friends</h4>
             <ul className='rightbarfriendList'>
                 {Users.map((u)=>(
                  <Online key={u.id} user={u}/>
                 ))}
             </ul>
        </div>
    </div>
  )



}

export default Rightbar