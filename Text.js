import {useEffect, useState} from "react";
function Text(){
     
    const[name,updateName] = useState("hello");
    const[items,updateitems] = useState([1,2,3,4]);
    
    const[form,setform] = useState({username:"password:"});

    const [loadingstatus,setloadingstatus] = useState(false);

    const [List1,setList] = useState([]);

    const List2 =(props)=>{
       const[listData,setlistData] = useState(props.listData);

       const deleteitem = (deleteitem)=>{
         let data = props.listData.filter((item)=>{
            return item.id !== deleteitem.id
    
         }) 
         console.log(deleteitem);
         setlistData(data);
       }
    
       
    
    return<>{listData.map((item)=>{
        return <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
            <td onClick={()=>{
                deleteitem(item)
            }}><i class="fa fa-window-close" aria-hidden="true"></i></td>
        </tr>
    })}</>
};



    // const updateusername = (e) =>{
    //     setform({...form,username:e.target.value});
    //     console.log("form");
    // }
    // const updatepassword =(e) =>{
    //     setform({...form,password:e.target.value});
    //     console.log(form);
    // }

    // const onupdateName = () =>{
    //     if (name==="welcome"){
    //         updateName("hello")
    //     }else if(name==="hello"){
    //         updateName("welcome")
    //     }
    // }
   
    useEffect(()=>{
        getData();
    },[])

    const getData=()=>{
        setloadingstatus(true);
        fetch("https://jsonplaceholder.typicode.com/comments")
  .then(res => res.json())
  .then((res) => {console.log(res);
              setList(res);
              setloadingstatus(false);
})
  }

        
    


    return(
        
        <>
           {loadingstatus?<div className="loading">Loading..</div>:""}

           <table className="table table-hover">
              <thead>
                <tr className="heading">
                    <th>No</th>
                    <th >name</th>
                    <th >email</th>
                    <th >body</th>
                    <th >delete</th>
                </tr>
              </thead>
              <tbody>
                <List2 listData={List1}/>
              </tbody>
           </table>
        </>
   );
    


  
    
    //  return<>
          
    //     <input type="text" placeholder="enter username" onChange={updateusername}/>

    //     <input type="text" placeholder="enter password" onChange={updatepassword}/>

    //    {
    //     items.map((items) =>{
    //         // return <h1 onClick={onupdateitems}>{items}</h1>
    //     }

    //     )
    //    }
    //    <h1 onClick={onupdateName}>welcome to fita,{name}</h1>
    //     </>
    

    }


    export default Text;
