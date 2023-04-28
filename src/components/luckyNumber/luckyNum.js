import { useState } from 'react';
import './luckyNum.css'


const luckyNumber = (Math.floor(Math.random()*5)+1);

function LuckyNumber(){

    const [guess, setGuess]=useState()

    const [count, setCount]=useState(0)
   
   
    
   
    function handleGuess(e){
     e.preventDefault();
    
     setCount(count + 1)
     
     const newGuess=parseInt(guess);
     
   
     
     if(newGuess===luckyNumber){
       const message = `congratulations you guessed the right number in ${count+1}`;
       alert(message)
   
     }else if(newGuess>luckyNumber){
       alert('you guessed a bigger number')
   
     }else if(newGuess<luckyNumber){
       alert('you guessed a smaller number')
     }
   
   }


    return(

    <>
      <h1>Guess The Right Number</h1>
      <h2>Number of attempts : { count } </h2>
      <form onSubmit={handleGuess}>
      <input type="number" value ={guess}  onChange={(e) => setGuess(e.target.value)}  placeholder='Guess Lucky Number....'/>
      <button type="submit">Match Number</button>
      </form>
      
      </>
    )


}

export default LuckyNumber