import React from 'react'
import './index.css';

const Navbar = ({setShowModal}) => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <h1>logo</h1>
                <ul>
                    <li>Home</li>
                    <li>Posts</li>
                    <li onClick={()=>setShowModal(true)}>Sign In</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;