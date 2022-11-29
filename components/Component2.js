import React from "react";
import Component3 from "./Component3";

function Component2(props){
    return <>{props.userName} Hello chandru! <Component3 userName={props.userName}/></>;
}

export default Component2;