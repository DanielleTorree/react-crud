import React from 'react';

const Modal = ({id='modal', onClose = () => {}, visible, title, buttonName, onConfirmar = () => {}}) => {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose()
    }

    return (
        visible && <div id={id} className='modal' onClick={handleOutsideClick}>
            <div className='container'>
                {/* <button 
                    className='close'
                    onClick={() => onClose()}
                /> */}
                <div className='content'>
                    <h2>{title}</h2>
                    <button 
                        className='botao remover btnModal'
                        onClick={() => onConfirmar()}
                    >{buttonName}</button>
                </div>
            </div>
        </div>  
    );
}

export default Modal;