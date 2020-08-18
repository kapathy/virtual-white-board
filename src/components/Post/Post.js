import React, { useContext } from 'react';
import './Post.css';
import { AuthContext } from "../../contexts/Auth"

/**
* Component responisble of rendering a Post.
* Using the Auth context to ensure that user logged in can only delete their own posts.
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
    color,

}) {

    const { currentUser } = useContext(AuthContext);
    const authUser = currentUser.displayName

    return (

        <div className="post" style={{ backgroundColor: color }}>
            <p className="message">{text}</p>
            {username === authUser ? <button className="delete" onClick={() => handleDeletePost(id)}>X</button> : ""}
            <div className="postInfo">
                <p className="username"> @{username}</p>
                <p className="date">{date}</p>
            </div>
        </div >
    );
}

