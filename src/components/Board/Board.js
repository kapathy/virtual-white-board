import React from 'react';
import './Board.css';
import Post from '../Post/Post';

export default function Board({
    posts,
    username,
    handleDeletePost
}) {
    return (
        <div className="board">
            {posts.map((post, id) => (
                <Post
                    key={post.id}
                    id={id}
                    text={post.text}
                    handleDeletePost={handleDeletePost}
                    username={username}
                />
            ))}
        </div>
    );


}


