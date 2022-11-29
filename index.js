import React from 'react';
import ReactDOM from 'react-dom/client';
// import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
// import Sample from './Sample';


// import Useref from "./Useref"
// import Useeffect from "./Useeffect";
// import Text from "./Text";
// import Fetch from "./Fetch";
// import App from "./App";
// import Project1 from './Project';
// import App1 from "./App1";
// import Newnotes1 from './Newnotes1';
// import App2 from "./App2";

import Project1 from './Pages1/Project1';



// import Component1 from './components/Component1';

const root=ReactDOM.createRoot(document.getElementById("root")); 
root.render(
    <React.StrictMode>
        {/* <Sample/> */}
         <BrowserRouter>
              <Project1/>
         </BrowserRouter> 
        
    </React.StrictMode>
);



