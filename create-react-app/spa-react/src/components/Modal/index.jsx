import React from 'react';
import './index.css';

const Modal = ({children}) => {
    return (
        <div className='modal-backdrop'>
            <div className="modal">
                {/* modal content  */}
                {children}
            </div>
        </div>
    )
}

export default Modal;