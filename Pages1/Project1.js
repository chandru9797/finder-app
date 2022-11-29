import React from 'react'
import {Route,Routes} from "react-router-dom";
import { AuthContextProvider } from '../context/Authcontact';
import Login from './Login';
import Profile from './profile/Profile'
// import ProtectedRoute from './ProtectedRoute';
// import Layout1 from './Layout1';

function Project1() {
  return (
    <>
    <AuthContextProvider>
    <Routes>
       <Route path = '/' element={<Login/> }></Route>
        <Route path = '/profile' element ={
          // <ProtectedRoute>
        <Profile/>
        // </ProtectedRoute>
        }>
        </Route>
        
      </Routes>
    </AuthContextProvider>
   
    
    </>
  )
}

export default Project1