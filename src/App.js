import { useState } from "react";
import './App.css'


function App() {

  const [count, setCount]=useState(0)

  function IncreaseCount(){
    return(
        setCount(count + 1)
    )
  }

  function DecreaseCount(){
    return(
        (count>0?setCount(count-1):(0))
    )
  }


  return (
    <div className="App">
      <>
      <h1 className="count">{count}</h1> 
      <div></div>
      <button style={{color:"green"}} className= "button1" onClick={IncreaseCount}>Increase</button>
      <button style={{color:"red"}} className= "button2" onClick={DecreaseCount}>Decrease</button>

      </>
    </div>
  );
}

export default App;
