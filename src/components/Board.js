import React from 'react';
import Post from './Post';

export default function Board({
    posts,
    username,
    handleDeletePost
}) {
    return (
        <div className="Board">
            {posts.map(post => (
                <Post
                    key={post.id}
                    text={post.text}
                    handleDeletePost={handleDeletePost}
                    username={username}
                />
            ))}
        </div>
    );


}


