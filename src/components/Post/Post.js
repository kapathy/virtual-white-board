import React from 'react';
import './Post.css';


export default function Post({
    id,
    text,
    handleDeletePost,
    username
}) {
    return (
        <div className="post" >
            <p className="message">{text}</p>
            <button className="delete" onClick={() => handleDeletePost(id)}> x </button>
            <div className="postInfo">
                <p className="username"> @{username}</p>
                <p className="date">{new Date().toLocaleString()}</p>
            </div>
        </div >
    );
}

