import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../Auth"
import Board from './Board';
import Header from './Header';

function WhiteBoard(props) {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState("");

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        let message1 = "Why do JavaScript programmers wear glasses?";
        addPost(message1);
    }, []);

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
        const user = currentUser.displayName
        console.log("currentUser", user);
        return (
            <div className="App">
                <Header props={props} username={user} />
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
                    username={user}
                />
            </div>
        )
    }

    return (
        <div>Sign In to use the whiteboard!</div>
    );
}

export default WhiteBoard;
