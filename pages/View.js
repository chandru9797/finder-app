import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from 'sweetalert2'
import axios  from 'axios';
// import { form } from "react-router-dom";
const api = axios.create({
    baseURL:'http://localhost:3001/',
    headers: {'Content-Type': 'application/json'}
 })

function View(){
    
    const data = useParams();
    // console.log(data.id);
    const [form,setForm] = useState({title:'',description:''})


    useEffect(()=>{
        api.get('courses/'+data.id).then( (event)=>{
            setForm({title:event.data.title,description:event.data.description});
           
         })
        },[])

    
    const HandleSubmit = (e) =>{
      e.preventDefault();
    
    //   why put
      api.put('courses/'+data.id,form).then( ()=>{
       
        // doubt
         setForm({title:'',description:''});
         Swal.fire({
            title: 'success',
            text: 'Swal injected',
            icon: 'success',
        });
      })}

   


     return (<>
         <div className="container">
           <div className="row">
                 <div className="col-md-5 col-offset-3" style={{marginLeft:'24%'}}>
                    <br/>
                 <form onSubmit={HandleSubmit}>
    <div class="form-group">
      <label for="title">Course Name</label>
      <input value={form.title}  type="text" onChange={ (e)=>{
           setForm({...form,title:e.target.value});
  
      }} class="form-control" id="title" aria-describedby="emailHelp" placeholder="Course Name"/>
      <br/>
    </div>
    <div class="form-group">
      <label for="courseDesc">Course Description</label>
      <input value={form.description}    type="text"  onChange={ (e)=>{
           setForm({...form,description:e.target.value});
  
      }} class="form-control" id="courseDesc" placeholder="Course Description"/>
    </div>
    <br/>
   
    <button type="submit" class="btn btn-primary">Update</button>
  </form>
  
                       </div>
           </div>
         </div> 
        
     </>);
}
      
   

export default View;