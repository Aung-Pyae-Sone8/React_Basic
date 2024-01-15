import React, { useState } from 'react'
import './index.css';

const PostFrom = () => {

    let [title,setTitle] = useState("");

    return (
        <form className='post-form'>
            <h1>Create Post</h1>
            <div className="form-control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <p>{title}</p>
            <div className="form-control">
                <button>Post Now</button>
            </div>
        </form>
    )
}

export default PostFrom;