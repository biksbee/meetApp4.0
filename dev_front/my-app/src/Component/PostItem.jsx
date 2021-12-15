import React from 'react';
import "../pages/style_page.css"

const PostItem = (props) => {

    return (
        <div className="post page mt-2" class={"bl"}>
            <div className="post__content">
                <div className="block-example border-bottom border-secondary mb-2">
                    <p>Name: {props.post.Name}</p>
                    <p>Email: {props.post.Email}</p>
                    <p>Nick: {props.post.Nick}</p>
                    <p>Password: {props.post.Password}</p>
                </div>
            </div>
        </div>
    );
};

export default PostItem;