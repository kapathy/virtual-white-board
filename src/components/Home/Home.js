import React, { useState, useEffect } from 'react';
import './Home.css';

const text = "A quick and fun way to communicate with your team!"

const Typewriter = ({ text }) => {

    const [{ content, start }, setContent] = useState({ content: '', start: 0 })

    useEffect(() => {
        if (start === text.length) return
        const delay = setTimeout(() => {
            setContent({ content: content + text[start], start: start + 1 })
            clearTimeout(delay)
        }, 100)
    }, [content])

    return <span className="typewriter">{content}<span className="cursor">|</span></span>
}

function Home(props) {
    return (
        <div className="App">
            <div className="homeOptions">
                <h1 className="title">Virtual Whiteboard</h1>
                <button className="signButton" onClick={() => { props.history.push('./signin') }}>Sing In</button>
                <button className="signButton" onClick={() => { props.history.push('./signup') }}>Sing Up</button>
                <Typewriter {...{ text }} />
            </div>
        </div>
    );
}

export default Home;
