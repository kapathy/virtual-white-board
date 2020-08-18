import React, { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = ({ text }) => {

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

export default TypeWriter;
