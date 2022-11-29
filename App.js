import Sample from "./Sample";
import Sample1 from "./Sample1";
import {userContext} from "./userContext";
import Textmemo from "./Textmemo";
 import { useState } from "react";
import useFetch from "./useFetch";

import UR from "./UR";  



function App(){

  const [list] =useFetch("https://jsonplaceholder.typicode.com/posts")


  const[title,settitle] = useState({
    color : "red",
    width: "200px",
    backgroundcolor:"white"
  })


   // const name= "chandru";

   // return(
   // <userContext.Provider value ={name}>
   //    <Sample/>
   //    <br></br>
   //    <Sample1/>
   // </userContext.Provider>);

const updatecss =()=>{
 
  settitle({
    color : "pink",
    width: "200px",
    backgroundcolor:"black"
  });
 
}


  return(
    
    <>
     {list&& list.map((item)=>{
      return <h1>{item.title}</h1>
     })}
    
    
    <h1 onClick={updatecss}style={title}>chandru</h1>

    <UR/> </>
  //  <Textmemo/>
  );


}
export default App;