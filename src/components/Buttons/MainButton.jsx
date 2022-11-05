import React from 'react';
import '../universal-components.css';

function MainButton(props) {
    return (
        <div className='main-btn-container'>
            <a href="www.google.com" className='main-btn'>{props.title}</a>
        </div>
    );
}

export default MainButton;