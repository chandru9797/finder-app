import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummydata"
import {useState} from "react"

function Post({post}) {

  const user = Users.filter(u=> u.id===post.userId)[0].username

  const userprofile = Users.filter(u=> u.id===post.userId)[0].profilePicture

  const [ like , setLike] = useState(post.like)

  const [ isLiked , setIsLiked] = useState(false)

  const likeHandler = ()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
console.log(post)

  return (
    <div className='post'>
        <div className='postWrapper'>
           <div className='postTop'>
            <div className='postTopLeft'>
               <img className="postProfileImg" src={userprofile} alt=""/>    
              <span className='postUsername'>{user}</span>
              <span className='postDate'>{post?.date}</span>
            </div>
            <div className='postTopRight'>
               <MoreVertIcon/>
            </div>
           </div>
           <div className='postCenter'>
           <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
           </div>
           <div className='postBottom'>
           <div className="postBottomLeft">
            <img className="likeIcon" src="assests/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assests/heart.png" onClick={likeHandler}  alt="" />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
           </div>
        </div>
    </div>
  )
}

export default Post