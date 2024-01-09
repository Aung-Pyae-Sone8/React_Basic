import './App.css';
import Image from './assets/image.jpg';
import { useState } from 'react';

function App() {
  
  // let name = "Aung Pyae Sone";
  let [name,setName] = useState("Aung Pyae Sone");   // useState(prev(or)default,new)  (or) useState(getter,setter)

  let changeName = () => {
    setName("Aung Aung");
    console.log(name);
  }

  return (
    <div className="app">
      <h1>Hello {name}</h1>
      <img src={Image} alt="This is an img!"/>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default App;
