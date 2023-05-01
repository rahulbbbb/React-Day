import React, { useEffect, useRef, useState } from 'react';

   function ImageDisplay() {
     const [imageUrl, setImageUrl] = useState('');
     const imageRef = useRef(null);
   
     useEffect(() => {
       if (imageUrl) {
         imageRef.current.src = imageUrl;
       }
     }, [imageUrl]);
   
     const handleImageChange = () => {
       
       const newImageUrl = `https://picsum.photos/400/600?${Date.now()}`;
       setImageUrl(newImageUrl);
     };
   
     return (
       <div>
         <img
           ref={imageRef}
           alt="Displayed Image"
           style={{ maxWidth: '100%' }}
          
         />
         <button style={{marginLeft:'30px', width:'200px', height:'50px', cursor:'pointer'}} 
         onClick={handleImageChange}>Change Image</button>
       </div>
     );
   }
   
   export default ImageDisplay;
    
   

 
