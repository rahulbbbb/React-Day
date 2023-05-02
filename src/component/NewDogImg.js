import { useState,useEffect } from "react";
import './NewDogImg.css'

function NewDogImg(){

    const [imgUrl, setImgUrl] = useState("");

    useEffect(()=>{
        
        async function ImgDog(){
            try{
            const data= await fetch('https://dog.ceo/api/breeds/image/random');
            const NewData=await data.json();
            setImgUrl(NewData.message);

        }
        catch(error){
            console.log(error)

        }}
        ImgDog();
    },[])
  


    return(
        
       <div>
       <img src={imgUrl} alt="dog"/>
      
       </div>
    )
}

export default NewDogImg