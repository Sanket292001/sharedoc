import React from 'react';
import '../universal-components.css';

function MainButton({title}) {
    return (
        <div className='main-btn-container'>
            <a href="www.google.com" className='main-btn'>{title}</a>
        </div>
    );
}

export default MainButton;