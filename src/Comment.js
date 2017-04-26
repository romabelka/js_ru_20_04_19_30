import React from 'react';

export default ({ comment }) => {
    return (
        <div>
            <div><b>{comment.user}</b></div>
            <div>{comment.text}</div><br/>
        </div>
    )
}