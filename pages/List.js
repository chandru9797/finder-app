import React from "react";
import axios  from 'axios';
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
// import Swal from 'sweetalert2';

const api = axios.create({
   baseURL:'http://localhost:3001/',
   headers: {'Content-Type': 'application/json'}
})

function List(){
   const[list,setList] = useState([]);

   
   const getdata=()=>{
    api.get('courses').then( (event)=>{
       setList(event.data);     //why using data here
    })}

   useEffect(()=>{
         getdata();
      },[])

      const deleteItem = (item) =>{

        api.delete('courses/'+item.id).then(()=>{
          getdata();
        })
       }

       const activeItem = (item)=> {
           item.status="active";

           var id = item.id;
        
           api.put('courses/'+id,item);
            console.log(item);}


      const InActiveitem = (item)=> {
           item.status="Inactive";
           api.put('courses/'+item.id,item);
            console.log(item); 
       }

      return <>
   
   
      <div class="container">
        <h2>Course List</h2>           
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { 

list&& list.map((item)=>{

   return (<>
    <tr>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td> 
           <button className="btn btn-warning btn-sm"
           onClick={()=>{
             deleteItem(item);
           }}>Delete</button>
         &nbsp;
           <button className="btn btn-primary btn-sm">
               <Link to={'/View/'+item.id} style={{color:'white'}}>View</Link>
            </button>
            &nbsp;
            <button className="btn btn-primary btn-sm"
              
               onClick={()=>{
                  activeItem(item);
               }}>
               
               Active
            </button> 
            &nbsp;
            <button className="btn btn-primary btn-sm"
               onClick={()=>{
                 InActiveitem(item);
               }}>
               Inactive
            </button>
            &nbsp;
         </td>
      </tr>
     
      
      </>)})}
      

      
     
    </tbody>
  </table>
</div>
</> 
}
export default List;