import React, { useState, useContext, useEffect } from 'react';
import './WhiteBoard.css';
import { AuthContext } from "../../contexts/Auth"
import Board from '../Board/Board';
import Header from '../Header/Header';
import firebase from '../../config/firebase'


function WhiteBoard(props) {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState("");

    const { currentUser } = useContext(AuthContext);

    const handleDeletePost = id => {
        const newPosts = [...posts];
        newPosts.splice(id, 1);
        setPosts(newPosts);
    };

    const addPost = text => {
        let user = currentUser.displayName;
        firebase.addPost(text, user);
        const newPosts = [...posts, { text }];
        setPosts(newPosts);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addPost(value);
        setValue("");
    };


    if (currentUser !== null) {
        const user = currentUser.displayName
        return (
            <div className="App">
                <Header props={props} username={user} />
                <div className="inputContainer">
                    <form onSubmit={handleSubmit}>
                        <input
                            maxLength="280"
                            type="text"
                            className="input"
                            placeholder="write your message here..."
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                    </form>
                    <button className="postButton" onClick={handleSubmit}>post</button>
                </div>
                <Board
                    posts={posts}
                    handleDeletePost={handleDeletePost}
                    username={user}
                />
            </div>
        )
    }
    return (
        <div id="showMe">Sign In to use the whiteboard!</div>
    );
}


export default WhiteBoard;
