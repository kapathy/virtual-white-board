import React, { useState, useContext } from 'react';
import './WhiteBoard.css';
import { AuthContext } from "../../contexts/Auth"
import Board from '../Board/Board';
import Header from '../Header/Header';

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
