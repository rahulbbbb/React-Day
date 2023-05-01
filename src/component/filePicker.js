 import React, { useRef } from 'react';

function FilePicker() {
  const fileInputRef = useRef(null);

  function handleButtonClick() {
    fileInputRef.current.click();
  }

  return (
    <div>
      <button style={{cursor:'pointer', width:'200px', height:'50px', marginLeft:'700px', marginTop:'300px'}} 
      onClick={handleButtonClick}>Pick a file</button>
      <input type="file" style={{display: 'none'}} ref={fileInputRef} />
    </div>
  );
}

export default FilePicker