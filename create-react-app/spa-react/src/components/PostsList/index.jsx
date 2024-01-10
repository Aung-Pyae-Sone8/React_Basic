import React from 'react';
import './index.css';

const PostsLists = ({posts}) => {

    // console.log(posts);
    return (
        <div className='postlist'>
            {posts.map((post) => (
                <div key={post.id} className="single-post">{post.title}</div>
            ))}
        </div>
    )
}

export default PostsLists;