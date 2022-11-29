import { useReducer } from "react";

const reducer =(state,action)=>{
   console.log(state,action);


   if (action==="increment"){
    state=state+1;
   }
  
   if (action==="decrement"){
    state=state-1;
   }
    
   return state;

}


const  UR=()=>{
  
   const[data,dispatchData] = useReducer(reducer,4)

  return  <>
    
    <button onClick={()=>{dispatchData("increment")}}>increment</button>
    
    <button onClick={()=>{dispatchData("decrement")}}>decrement</button>

    <h1>{data}</h1>
  </>
}

export default UR;