import List from "./pages/List";
import Layout from "./pages/Layout";
import Add from "./pages/Add";
import Home from "./pages/Home";
import View from "./pages/View";

import {Route,Routes} from "react-router-dom";

function Project(){
     

   return(
    <>
      <Routes>
       <Route element={<Layout/>}>
        <Route path = '/' element ={<Home/>}></Route>
        {/* <Route path = '/home' element ={<Homepage/>}></Route> */}
        <Route path = '/list' element ={<List/>}></Route>
        <Route path = '/add' element ={<Add/>}></Route>
        <Route path = '/View/:id' element ={<View/>}></Route>

        </Route>
      </Routes>
    
    
    </>
   )


}

export default Project;