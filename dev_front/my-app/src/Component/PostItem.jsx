import React from 'react';

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}.</strong>
                <div>
                    {props.post.name}
                    {props.post.email}
                    {props.post.nick}
                    {props.post.password}
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;