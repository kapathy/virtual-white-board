import React, { useState, useContext, useEffect } from 'react';
import './WhiteBoard.css';
import { AuthContext } from "../../contexts/Auth"
import Board from '../Board/Board';
import Header from '../Header/Header';
import firebase from '../../config/firebase'
import ColorPicker from '../ColorPicker/ColorPicker';

/**
* Puts together the main compoents for the entire whiteboard screen.
* Renderes the {@link Header}, {@link ColorPicker} and {@link Board} components.
* @param props 
*/

function WhiteBoard(props) {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState("");
    const [color, setColor] = useState("#a3b2a5");

    const { currentUser } = useContext(AuthContext);

    /**
    * Requests the posts data from the database.
    */
    useEffect(() => {
        firebase.db.collection('posts').onSnapshot((snapshot) => {
            const newPosts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(newPosts);
        })
    }, [])

    /**
    * Handles deletion of a post.
    * @param {String} id - id (index) of the post to be deleted.
    */
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

    /**
    * Receives the color of the post from child {@link ColorPicker} component. 
    * @param {String} data - color code recieved.
    */
    const getColor = (data) => {
        setColor(data);
    };

    /**
    * Adds a post to the database.
    * @param {String} text - message to be posted.
    */
    const addPost = text => {
        const date = new Date().toLocaleString();
        firebase.addPost(date, text, currentUser.displayName, color);
        const newPosts = [...posts, { text }];
        setPosts(newPosts);
    };

    /**
    * Calls the addPost method to add the post and clears the input field. 
    * @param {event} e - when user clicks button.
    */
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
                />
            </div>
        )
    }
    return (
        <div id="showMe">Sign In to use the whiteboard!</div>
    );
}

export default WhiteBoard;
