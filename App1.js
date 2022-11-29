import React, { useState } from "react";
import Nav from "./components1/nav";
import Tweets from "./components1/Tweets";

// what is props?
  //  exchange data between Components
function App1(){

  const [counter, setCounter] =useState(0);
  const [toggle , setToggle] = useState(false);
   
  const incrementor = ()=>{
    setCounter(counter +1);
  };
  const decrementor = ()=>{
    setCounter(counter -1);
  };
  const togglerEl =()=>{
    setToggle((prev) => !prev);
  };
 
    return (
        <>
          <h1 className={toggle ? "active" : " "}>Hello chandru</h1>
          <h2>Counter {counter}</h2>
          <button onClick={incrementor}>Click</button>
          <button onClick={decrementor}>Click</button>
          <button onClick={togglerEl}>toggler</button>
          <div className="Home">
              <Nav/>
              <Tweets />
          </div>
          
        </>
    )
}

export default App1;