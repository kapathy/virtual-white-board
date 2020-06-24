import React, { useState, useContext } from 'react';
import { AuthContext } from "../Auth"
import Board from './Board';
import Header from './Header';

function WhiteBoard(props) {
    const [posts, setPosts] = useState([
    ]);
    const [value, setValue] = useState("");

    const { currentUser } = useContext(AuthContext);

    const handleDeletePost = id => {
        console.log("delete");
        const newPosts = [...posts];
        newPosts.splice(id, 1);
        setPosts(newPosts);
    };

    const addPost = text => {
        console.log("Add");
        const newPosts = [...posts, { text }];
        setPosts(newPosts);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addPost(value);
        setValue("");
    };

    if (currentUser != null) {
        console.log("currentUser", currentUser.displayName);
        return (
            <div className="App">
                <Header props={props} username={currentUser.displayName} />
                <form onSubmit={handleSubmit}>
                    <input
                        maxlength="280"
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
                    username={currentUser.displayName}
                />
            </div>
        )
    }

    return (
        <div>Sign In to use the whiteboard!</div>
    );
}

export default WhiteBoard;
