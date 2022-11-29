import {Route,Routes} from "react-router-dom";
import About from "./componentss/About";
import Welcome from "./componentss/Welcome";
import Find from "./componentss/Find";

function Router(){
    
   return(
    <> 

<Routes>
    
        <Route path="/" element={ <Find/> }>
        
        <Route path="/" element={ <Welcome/>}></Route>
        
        <Route path="/About" element={ <About/> }></Route>
          </Route>
          
    </Routes>

</>
   )



};

export default Router;