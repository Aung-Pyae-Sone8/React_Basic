import React from 'react';
import './index.css';
import ReactDom from 'react-dom';

const Modal = ({ children }) => {
    return (
        ReactDom.createPortal(
            <div className='modal-backdrop'>
                <div className="modal">
                    {/* modal content  */}
                    {children}
                </div>
            </div>,
            document.getElementById('modal')
        )
    )
}

export default Modal;