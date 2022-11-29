import React from "react";
import Tweet from "./Tweet";

const Tweets =(props)=>{
    
   const tweets =[{name:"chandru", tweet:"I like dogs"},
                 {name:"muthu", tweet:"I like cats"},
                {name:"Barath", tweet:"I like rats!!!"}]


    return(
    <div>
        {tweets.map((tweet)=>(
            <Tweet name={tweet.name} tweet={tweet.tweet}/>
        ))}
    </div>
)
    }
export default Tweets;