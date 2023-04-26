import {useState} from 'react'
import './App.css';





function App() {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.name.value;
   setName(nameInput);
   e.target.name.value= "";
  }

 
return (
  <div className="App">

        <h2> Hi my name is {name ?  name : '****'}!</h2>
    <form  onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input className="inputt" type = "text" placeholder= "Add your name..." name="name" id="name" />
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}


export default App;












