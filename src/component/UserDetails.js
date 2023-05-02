import {useState} from 'react'
import './UserDetails.css'


function UserDetail(){

const [Data, setData]=useState([])

async function UserInfo(){
    try{

const data= await fetch(' https://reqres.in/api/users/')
const UpdatedData=await data.json();
setData(UpdatedData.data);

    }catch(error){
        console.log(error)
    }
}


    
return(
    
<div className="App">
           <button onClick={UserInfo}>Get Users</button>
    <div className="card-container">
           {Data.map((item) => (
        <div className="card-body" key={item.id}>

           <img src={item.avatar} alt="user" />
            <h2>{item.first_name} {item.last_name}</h2>
            <p>Email: {item.email}</p>
            <p className="id">ID: {item.id}</p>
         
        </div>
        ))}
    </div>
</div>
  );
}


    export default UserDetail