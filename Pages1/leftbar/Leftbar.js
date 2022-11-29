import React from 'react'
import "./leftbar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


function Leftbar() {
  return (
    <div className='leftbar'>
        <div className='leftwrapper'>
          <ul className='leftbarlist'>
            <li className = "leftbarlistitem">
              <RssFeedIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Feed</span>
            </li>
            <li className = "leftbarlistitem">
              <ChatIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Chats</span>
            </li>
            <li className = "leftbarlistitem">
              <PlayCircleIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Videos</span>
            </li>
            <li className = "leftbarlistitem">
              <GroupsIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Groups</span>
            </li>
            <li className = "leftbarlistitem">
              <BookmarkAddIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Bookmarks</span>
            </li>
            <li className = "leftbarlistitem">
              <HelpOutlineIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Questions</span>
            </li>
            <li className = "leftbarlistitem">
              <WorkOutlineIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Jobs</span>
            </li>
            <li className = "leftbarlistitem">
              <EventIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Events</span>
            </li>
            <li className = "leftbarlistitem">
              <SchoolIcon className='leftbaricon'/>
              <span className='leftbarlisttext'>Courses</span>
            </li>
          </ul>
            <hr className='sidebarHr'/>
        </div>

    </div>
  )
}

export default Leftbar