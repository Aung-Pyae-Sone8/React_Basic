import './App.css';
import Image from './assets/image.jpg';
import { useState } from 'react';

function App() {
  
  // useState
  let [name,setName] = useState("Aung Pyae Sone");   // useState(prev(or)default,new)  (or) useState(getter,setter)

  let changeName = () => {
    setName("Aung Aung");
    console.log(name);
  }

  // list
  let [posts,setPosts] = useState([
    {
      id : 1,
      title : 'First post'
    },
    {
      id : 2,
      title : 'second post'
    },
    {
      id : 3,
      title : 'third post'
    }
  ]);
  console.log(posts);

  return (
    <div className="app">
      <h1>Hello {name}</h1>
      <img src={Image} alt="This is an img!"/>
      <button onClick={changeName}>Change Name</button>
      <br/>
      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
