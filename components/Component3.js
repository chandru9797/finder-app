import React from "react";
import Component4 from "./Component4";

function Component3(props){
    return <>{props.userName}Hello India! <Component4 userName={props.userName}/></>;
}

export default Component3;