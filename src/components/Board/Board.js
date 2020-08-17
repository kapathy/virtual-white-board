import React from 'react';
import './Board.css';
import Post from '../Post/Post';

export default function Board({
    posts,
    handleDeletePost,
}) {
    return (
        <div className="board">
            {posts.map((post, id) => (
                <Post
                    key={post.id}
                    id={id}
                    text={post.value}
                    handleDeletePost={handleDeletePost}
                    username={post.user}
                    date={post.date}
                    color={post.color}
                />
            ))}
        </div>
    );


}


