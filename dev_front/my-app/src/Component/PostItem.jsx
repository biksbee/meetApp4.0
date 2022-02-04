import React, {useState} from 'react';
import "../pages/style_page.css"


const PostItem = (props) => {
    const [id, setId] = useState([]);

    const dropUsr = () => {
        const id = props.post._id;
        fetch('http://localhost:5000/id', {
            method: "POST", body: JSON.stringify({id}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => console.log(res));
        setId([...id, {_id: id}]);
    };
    return (
        <div className="post page mt-2 bl">
            <div className="post__content">
                <div className="block-example flex border-bottom border-secondary mb-2">
                    <div>
                        <p>_id: {props.post._id}</p>
                        <p>Name: {props.post.Name}</p>
                        <p>Email: {props.post.Email}</p>
                        <p>Nick: {props.post.Nick}</p>
                        <p>Password: {props.post.Password}</p>
                    </div>
                    <div>
                        <button type="submit" onClick={dropUsr}>drop</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;