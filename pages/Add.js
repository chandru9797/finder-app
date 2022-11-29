import { useState } from "react";
import axios  from 'axios';
import Swal from 'sweetalert2';


const api = axios.create({
  baseURL:'http://localhost:3001/',
  headers: {'Content-Type': 'application/json'}
})

function Add(){
  const [form,setForm] = useState({title:'',description:''});

   const handleSubmit = (e) =>{
    // why preventdefault doubt
      e.preventDefault();                    
      api.post('courses',form).then (()=>{
    // doubt
         setForm();
         Swal.fire({
            title: 'Done',
            text: 'course injected',
            icon: 'success',
        });
      })
      
   }

   return(

    <>
   <div className="container">
          {/* <div className="row"> */}
                <div className="col-md-5 col-offset-3" style={{marginLeft:'24%'}}>
                   <br/> 
               <form onSubmit={handleSubmit}>

                
  <div class="form-group">
    <label for="title">Course Name</label>

    <input  type="text" onKeyDown= {(e)=>{
         setForm({...form,title:e.target.value})
        } }
        class="form-control" id="title" aria-describedby="emailHelp" placeholder="Course Name"/>
        <br/>
        </div>
      
      <div class="form-group">
        <label for="courseDesc">Course Description</label>

        <input    type="text"  onKeyDown={ (e)=>{
             setForm({...form,description:e.target.value});
            }} class="form-control" id="courseDesc" placeholder="Course Description"/>
            <br/>
            </div>
            
           
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          
                               </div>
                   {/* </div> */}
                </div>    
    
    </>
 )
}

export default Add;