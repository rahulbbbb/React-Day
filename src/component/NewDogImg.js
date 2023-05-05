import { useState, useEffect } from "react";
import axios from "axios";
import './NewDogImg.css';

function NewDogImg() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    async function ImgDog() {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setImgUrl(response.data.message);
      } catch (error) {
        console.log(error);
      }
    }
    ImgDog();
  }, []);

  return (
    <div>
      <img src={imgUrl} alt="dog" />
    </div>
  )
}

export default NewDogImg;

