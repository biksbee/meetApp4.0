import React from 'react';

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}.</strong>
                <div>
                    <p>{props.post.name}</p>
                    <p>{props.post.email}</p>
                    <p>{props.post.nick}</p>
                    <p>{props.post.password}</p>
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;