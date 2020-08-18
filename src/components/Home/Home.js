import React from 'react';
import TypeWriter from '../TypeWriter/TypeWriter';
import './Home.css';

const text = "A quick and fun way to communicate with your team!"

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
