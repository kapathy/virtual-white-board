import React, { useState } from 'react';
import firebase from '../../config/firebase'

/**
* Component responisble of rendering Sign In form.
* @param props
*/

function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /**
    * Handles sign in when user clicks button and pushes user to {@link WhiteBoard} component.
    * @param {event} e - event fired when clicking button.
    */
    const handleSignIn = e => {
        e.preventDefault();
        firebase
            .signin(email, password)
            .then(props.history.push("/whiteboard"))
            .catch(err => alert(err));
    };

    return (
        <div className="App">
            <h1>Virtual Whiteboard</h1>
            <form className="signinForm" onSubmit={handleSignIn}>
                <input
                    type="text"
                    className="input sign"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="off"
                />
                <input
                    type="password"
                    className="input sign"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="off"
                />
                <div className="container">
                    <button className="button continue">Continue</button>
                </div>
            </form>
        </div >
    );
};

export default SignIn;
