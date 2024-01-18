import React from 'react';
import './index.css';
import styles from './single_post.module.css';

const PostsLists = ({posts}) => {

    // console.log(posts);
    return (
        <div className='postlist container'>
            {posts.map((post) => (
                <div key={post.id} className={`single-post ${styles.card}`}>
                    <h3>{post.title}</h3>
                    <h4>status - {post.status}</h4>
                </div>
            ))}
        </div>
    )
}

export default PostsLists;