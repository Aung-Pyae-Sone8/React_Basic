import React from 'react';
import './index.css';
import styles from './single_post.module.css';

const PostsLists = ({posts}) => {

    // console.log(posts);
    return (
        <div className='postlist container'>
            {posts.map((post) => (
                <div key={post.id} className={`single-post ${styles.card}`}>{post.title}</div>
            ))}
        </div>
    )
}

export default PostsLists;