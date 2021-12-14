import './style_page.css';
import '../'
import MyInput from "../Component/UI/input/MyInput";
import MyButton from "../Component/UI/button/MyButton";
import {useState} from "react";
const React = require('react');


function SignUp(){
    const [spisok, setSpisok] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');

    const addNewUsr = () => {
        fetch('http://localhost:4000/meetAppBd', {
            method: "POST", body: JSON.stringify({name, nick, email, password}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => console.log(res));
        setSpisok([...spisok, {name: name, email: email, nick: nick, password: password}]);
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
                                type="username"
                                id="username"
                                name="username"
                                placeholder={"name"}
                                required={true}
                            />
                        </p>
                        <p>
                            <MyInput
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="email"
                                placeholder={"email"}
                                required={true}
                            />
                        </p>
                        <p>
                            <MyInput
                                value={nick}
                                onChange={e => setNick(e.target.value)}
                                type="nick"
                                id="nick"
                                name="nick"
                                placeholder={"nick"}
                                required={true}
                            />
                        </p>
                        <p>
                            <MyInput
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                name="password"
                                placeholder={"***********"}
                                required={true}
                            />
                        </p>
                        <MyButton type="submit" onClick={addNewUsr}>Send</MyButton>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default SignUp;