import React, { useContext } from 'react';
import './Account.css';
import firebase from '../../config/firebase';
import UserIcon from '../../svgs/user.svg';
import { AuthContext } from "../../contexts/Auth"

export default function Header({ props, username }) {

    const { currentUser } = useContext(AuthContext);

    const handleSignOut = () => {
        firebase.signout()
            .then(props.history.push('/'))
            .catch(err => {
                alert(err);
            });
    };

    console.log(currentUser);

    return (

        <div>
            <div className="App">
                <img className="icon" src={UserIcon} alt="User Icon" />
                <div>Account Info</div>
                <div className="">{username}</div>
                <button className="signoutButton" onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    );
}



