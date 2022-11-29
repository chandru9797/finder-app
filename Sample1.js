import { useContext } from "react";
import {userContext} from "./userContext";
import React from "react";

function Sample1(){
    const name = useContext(userContext);
    return <>{name}</>
    // return(<>chandru---</>)
}

export default Sample1;