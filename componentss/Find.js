import {Link,Outlet} from "react-router-dom";

function Find(){
     
    return <>
    
      <Link to ="/">Welcome</Link>
    
      <Link to ="/About">About</Link>
    
      <Outlet></Outlet>
    </>




}

export default Find;