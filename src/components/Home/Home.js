import React from 'react';
import TypeWriter from '../TypeWriter/TypeWriter';
import './Home.css';

const text = "A quick and fun way to communicate with your team!"

/**
* Renders the Home component (Screen before sign in/sign up).
* When clicking on sign in or sign on buttons, users is pushed forward to {@link SignIn} or {@link SignUp} components.
* Also renders the {@link TypeWriter} component.
* @param props
*/

function Home(props) {
    return (
        <div className="App">
            <div className="homeOptions">
                <h1 className="title">Virtual Whiteboard</h1>
                <button className="signButton" onClick={() => { props.history.push('./signin') }}>Sign In</button>
                <button className="signButton" onClick={() => { props.history.push('./signup') }}>Sign Up</button>
                <TypeWriter {...{ text }} />
            </div>
        </div>
    );
}

export default Home;
