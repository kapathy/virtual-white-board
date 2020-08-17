import React from 'react';
import './Post.css';


export default function Post({
    id,
    text,
    handleDeletePost,
    username,
    date,
    color
}) {
    return (
        <div className="post" style={{ backgroundColor: color }}>
            <p className="message">{text}</p>
            <button className="delete" onClick={() => handleDeletePost(id)}> x </button>
            <div className="postInfo">
                <p className="username"> @{username}</p>
                <p className="date">{date}</p>
            </div>
        </div >
    );
}

