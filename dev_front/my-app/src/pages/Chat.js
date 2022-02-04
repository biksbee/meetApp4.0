import React, {useEffect, useState} from "react";
import ButtonUsr from "../Component/UI/button/ButtonUsr";
import PostList from "../Component/PostList";
import './style_page.css';
import MyInput from "../Component/UI/input/MyInput";
import MyButton from "../Component/UI/button/MyButton";

function Chat(){
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState([]);

    const addNewMessage = () => {
        fetch('http://localhost:5000/chat', {
            method: "POST", body: JSON.stringify({message}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => console.log(res));
        setPosts([...posts, {message: message}]);
    }

    return(
        <>
            <ButtonUsr />
            <div className={"App"}>
                <div className={"App-header"}>
                    <h2 className={"color"}>Chat:</h2>
                    <PostList posts={posts} title="usersы"/>
                    <form>
                            <MyInput
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                type="message"
                                placeholder={"message"}
                                required={true}
                            />
                        <MyButton type="submit" onClick={addNewMessage}>Send</MyButton>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Chat;