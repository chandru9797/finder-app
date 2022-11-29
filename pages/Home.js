
import React from "react";
import axios  from 'axios';
import { useEffect, useState } from 'react';


const api = axios.create({
  baseURL:'http://localhost:3001/',
  headers: {'Content-Type': 'application/json'}
})

function Home(){

  
  const[activeCount,setactiveCount] = useState(0);
  
  const[inactiveCount,setinactiveCount] = useState(0);

  const getdata=()=>{
    api.get('courses').then( (event)=>{

      let account = event.data.filter(function(e){
        return e.status === 'active';
      })
      setactiveCount(account.length); 

      let account1 = event.data.filter(function(e){
        return e.status === 'Inactive';
      })

      setinactiveCount(account1.length);     //why using data here
    })}
   


   useEffect(()=>{
         getdata();
      },[])

   return (
     <>
     <div className="heading1"><h3>Welcome to course management</h3></div>
      <h4>Active courses: {activeCount} </h4>
      <h3>Inctive courses: {inactiveCount}</h3>
       
     
     </>
     
   )
}

export default Home;