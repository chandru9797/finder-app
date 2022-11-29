import React from "react";
import Component2 from "./Component2";

function Component1(props){
    return <>{props.userName} Hello world! <Component2 userName={props.userName}/></>;
}

export default Component1;


