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
            <p className="username"> @{username}</p>
            <button className="delete" onClick={() => handleDeletePost(id)}> delete </button>
        </div >
    );
}

