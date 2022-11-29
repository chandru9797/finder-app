import {increment,decrement,selectCount} from "../counterSlice";
import {useSelector,useDispatch} from "react-redux";

function Welcome(){

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
   return <>
    
    <h1>Count {count}</h1>
    <button onClick={ ()=>{
      dispatch(increment())
    }}>increment</button>
   
   <button onClick={ ()=>{
      dispatch(decrement())
    }}>decrement</button>
   
   </>
}
export default Welcome;