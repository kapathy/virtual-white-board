import React from 'react';
import './Header.css';
import firebase from '../../config/firebase'

export default function Header({ props, username }) {

    const handleSignOut = () => {
        firebase.signout()
            .then(props.history.push('/'))
            .catch(err => {
                alert(err);
            });
    };

    return (
        <div>
            <div className="header">
                <div className="welcome"> Hello, {username}</div>
                <div className="signout" onClick={handleSignOut}>Sign Out</div>
            </div>
            <h1>Virtual Whiteboard</h1>
        </div>
    );
}




