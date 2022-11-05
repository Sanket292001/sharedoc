import React from 'react';
import '../universal-components.css';

function AuthButton(props) {
    return (
        <div className='.main-btn-container '>
            <p onClick={props.onClick} className='auth-btn'>{props.title}</p>
        </div>
    );
}

export default AuthButton;