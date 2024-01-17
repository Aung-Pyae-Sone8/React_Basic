import React, { useRef, useState } from 'react'
import './index.css';

const PostFrom = ({addPost}) => {

    // let [title,setTitle] = useState("");

    let title = useRef();

    let resetForm = () => {
        // setTitle('');
        title.current.value = "";
        // console.log('updated successfully');
    }

    let upload_post = (e) => {
        e.preventDefault(); // prevent refreshing page

        let post = {
            id : Math.floor(Math.random()*10000),
            title : title.current.value
        }
        resetForm();
        addPost(post);
    }

    return (
        <form className='post-form' onSubmit={upload_post}>
            <h1>Create Post</h1>
            <div className="form-control">
                <label htmlFor="">Title</label>
                <input type="text" ref={title}/>
            </div>
            <p>{title}</p>
            <div className="form-control">
                <button type='submit'>Post Now</button>
            </div>
        </form>
    )
}

export default PostFrom;