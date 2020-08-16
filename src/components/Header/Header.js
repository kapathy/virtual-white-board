import React, { useState } from 'react';
import './Header.css';
import firebase from '../../config/firebase';
import UserIcon from '../../svgs/user.svg';


export default function Header({ props, username }) {

    const [clicked, setClicked] = useState(false);

    const handleSignOut = () => {
        firebase.signout()
            .then(props.history.push('/'))
            .catch(err => {
                alert(err);
            });
    };

    const handleClick = () => {
        { clicked ? setClicked(false) : setClicked(true) }
    }

    return (
        <div>
            <div className="header">
                <div className="user" onClick={handleClick} >{username}</div>
                <img className="usericon" src={UserIcon} alt="User Icon" />
            </div>
            <div className="signoutContainer">
                {clicked ? <button className="signout" onClick={handleSignOut}>Sign Out</button> : <div></div>}
            </div>
            <h1>Virtual Whiteboard</h1>
        </div>
    );
}




