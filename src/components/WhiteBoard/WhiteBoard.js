import React, { useState, useContext, useEffect } from 'react';
import './WhiteBoard.css';
import { AuthContext } from "../../contexts/Auth"
import Board from '../Board/Board';
import Header from '../Header/Header';
import firebase from '../../config/firebase'
import ColorPicker from '../ColorPicker/ColorPicker';

function WhiteBoard(props) {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState("");
    const { currentUser } = useContext(AuthContext);
    const [color, setColor] = useState("#a3b2a5");

    useEffect(() => {
        firebase.db.collection('posts').onSnapshot((snapshot) => {
            const newPosts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(newPosts);
        })
    }, [])

    const handleDeletePost = (id) => {
        const key = posts[id].id;
        console.log(key);
        firebase.db.collection("posts").doc(key).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
        const newPosts = [...posts];
        newPosts.splice(id, 1);
        setPosts(newPosts);
    };

    const getColor = (data) => {
        setColor(data);
        console.log(data);
    };

    const addPost = text => {
        const date = new Date().toLocaleString();
        firebase.addPost(date, text, currentUser.displayName, color);
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
                </div>
                <div className="inputContainer marginFix">
                    <ColorPicker setPostColor={getColor} />
                    <button className="postButton" onClick={handleSubmit}>post</button>
                </div>
                <Board
                    posts={posts}
                    handleDeletePost={handleDeletePost}
                    username={user}
                    color={color}
                />
            </div>
        )
    }
    return (
        <div id="showMe">Sign In to use the whiteboard!</div>
    );
}


export default WhiteBoard;
