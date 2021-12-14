import React, {useState} from 'react'
import './style_page.css';
import PostList from "../Component/PostList";
import MyButton from "../Component/UI/button/MyButton";
import MyInput from "../Component/UI/input/MyInput";



function SignUp(){
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');




    const addNewUsr = () => {
        fetch('http://localhost:5000/meetAppBd', {
            method: "POST", body: JSON.stringify({name, nick, email, password}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => console.log(res));
        alert("test2");
        setPosts([...posts, {name: name, email: email, nick: nick, password: password}]);
    }
    return (
        <div className={"form"} class={"page"}>
            <div className={"App"}>
                <div className={"App-header"}>
                    <h2>Register user:</h2>
                    <form>
                        <p>
                            <MyInput
                                value={name}
                                onChange={e => setName(e.target.value)}
                                type="text"
                                placeholder={"name"}
                                required={true}
                            />
                        </p>
                        <p>
                            <MyInput
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="text"
                                placeholder={"email"}
                                required={true}
                            />
                        </p>
                        <p>
                            <MyInput
                                value={nick}
                                onChange={e => setNick(e.target.value)}
                                type="text"
                                placeholder={"nick"}
                                required={true}
                            />
                        </p>
                        <p>
                            <MyInput
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder={"***********"}
                                required={true}
                            />
                        </p>
                        <MyButton type="submit" onClick={addNewUsr}>Send</MyButton>
                    </form>
                    <PostList posts={posts} title="usersы"/>
                </div>
            </div>
        </div>

    );
}

export default SignUp;