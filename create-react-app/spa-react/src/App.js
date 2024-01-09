import './App.css';
import Image from './assets/image.jpg';

function App() {
  
  let name = "Aung Pyae Sone";

  return (
    <>
      <h1>Hello {name}</h1>
      <img src={Image} alt="This is an img!"/>
    </>
  )
}

export default App;
