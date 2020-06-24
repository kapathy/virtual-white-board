import React, { useState } from 'react';
import firebase from '../config/firebase'

function SignUp(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = e => {
        e.preventDefault();
        onSignUp();
    };

    async function onSignUp() {
        try {
            firebase.signup(firstname, lastname, username, email, password);
            props.history.push('./whiteboard');
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="App">
            <form className="signupForm" onSubmit={handleSignUp}>
                <input
                    type="text"
                    className="input sign"
                    placeholder="First Name"
                    onChange={e => setFirstname(e.target.value)}
                    autoComplete="off"
                />
                <input
                    type="text"
                    className="input sign"
                    placeholder="Last Name"
                    onChange={e => setLastname(e.target.value)}
                    autoComplete="off"
                />
                <input
                    type="text"
                    className="input sign"
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                    autoComplete="off"
                />
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
}
export default SignUp;
