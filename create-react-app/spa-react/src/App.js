import './App.css';
import Image from './assets/image.jpg';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostsLists from './components/PostsList/index';
import Modal from './components/Modal/index';

function App() {

  // useState
  let [name, setName] = useState("UseState");   // useState(prev(or)default,new)  (or) useState(getter,setter)

  let changeName = () => {
    setName("Aung Aung");
    // console.log(name);
  }

  // list
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First post'
    },
    {
      id: 2,
      title: 'second post'
    },
    {
      id: 3,
      title: 'third post'
    }
  ]);
  // console.log(posts);

  // delete post 
  let deletePost = (id) => {
    setPosts((prevState) => prevState.filter(post => post.id !== id))
  }

  // state update  
  let [count, setCount] = useState(0)

  let increment = () => {
    setCount((prevState) => prevState + 1);
  }
  let [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="app">
        <h1>Hello {name}</h1>
        <img src={Image} alt="This is an img!" />
        <button onClick={changeName}>Change Name</button>
        <br />
        <h1>Posts</h1>
        <ul>
          {!!posts.length && posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </li>
          ))}
          {!posts.length && <p>No Posts Available</p>}
        </ul>
        <br />
        <h1>Counter</h1>
        <h3>Count - {count}</h3>
        <button onClick={increment}>Increment</button>
      </div>
      <Navbar setShowModal={setShowModal} />
      <PostsLists posts={posts} />
      {showModal && <Modal danger={false}>
        <h1>Zoom class is availale now!</h1>
        <p>Feel free to <a href=''>join</a> here</p>
        <button onClick={()=>setShowModal(false)}>Close</button>
      </Modal>}
    </>
  )
}

export default App;
