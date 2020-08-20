import React, { useState } from 'react';
import './Header.css';
import firebase from '../../config/firebase';
import UserIcon from '../../svgs/user.svg';

/**
* Component responisble of rendering the header.
* @param posts
* @param {String} username - Username of the user who is signed in.
*/

export default function Header({ props, username }) {

    const [clicked, setClicked] = useState(false);

    /**
    * When user signs out call firebase to ensure sign out, and push the user to the {@link Home} component.
    */
    const handleSignOut = () => {
        firebase.signout()
            .then(props.history.push('/'))
            .catch(err => {
                alert(err);
            });
    };

    /**
    * When user clicks on their username toggle click
    * When clicked is true sign out button is displayed.
    */
    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true)
    }

    return (
        <div>
            <div className="header">
                <div className="user" onClick={handleClick} >{username}</div>
                <img className="usericon" src={UserIcon} alt="User Icon" />
            </div>
            <div className="signoutContainer">
                {clicked && <button className="signout" onClick={handleSignOut}>Sign Out</button>}
            </div>
            <h1 className="name">Virtual Whiteboard</h1>
        </div>
    );
}




