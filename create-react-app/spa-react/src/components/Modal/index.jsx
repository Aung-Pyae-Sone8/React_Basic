import React from 'react';
import './index.css';
import ReactDom from 'react-dom';

const Modal = ({ children, danger = false }) => {
    let className = danger ? 'border-red' : 'border-blue'
    return (
        ReactDom.createPortal(
            <div className="modal-component">
                <div className='modal-backdrop'>
                    <div className={`modal ${className}`}>
                        {/* modal content  */}
                        {children}
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        )
    )
}

export default Modal;