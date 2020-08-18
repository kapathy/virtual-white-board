import React from 'react';
import './Post.css';

/**
* Component responisble of rendering a Post.
* @param {String} id - user id.
* @param {String} text - message/text on the post
* @param {function} handleDeletePost - method to delete a post.
* @param {String} username - username of the user who is signed in.
* @param {String} date - date that the post was posted
* @param {String} color - post color
*/

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

