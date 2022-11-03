import React from "react";
import profileImg from  '../../assets/images/profile.jpg';
import '../universal-components.css';

function AppBar({title}) {
    return (
        <div className="appbar">
            <h1>{title}</h1>
            <img src={profileImg} alt="Profile" className='profile-icon'></img>
        </div>
    );
}

export default AppBar;