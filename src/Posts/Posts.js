import React from 'react';

const Posts = (props) => {
    const {userId, id, title, body} = props.post;
    return (
        <ul>
            <li>userId: {userId}</li>
            <li>id: {id}</li>
            <li>title: {title}</li>
            <li>body: {body}</li>
        </ul>
    );
};

export default Posts;