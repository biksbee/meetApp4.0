import React, {useState} from 'react';
import './style_page.css';
import MyButton from "../Component/UI/button/MyButton";
import MyInput from "../Component/UI/input/MyInput";


function LogIn(){
    const [spisok, setSpisok] = useState([]);
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');

    const checkUsr = () => {
        fetch('http://localhost:5000/api/meetAppBd', {
            method: "POST", body: JSON.stringify({nick, password}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => console.log(res));
        setSpisok([...spisok, {nick: nick, password: password}]);
    }

    return (
        <div className={"form page"}>
            <div className={"App"}>
                <div className={"App-header"}>
                    <h2 className={"color"}>Authorization:</h2>
                    <form>
                        <p>
                            <MyInput
                                value={nick}
                                onChange={e => setNick(e.target.value)}
                                type="nick"
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
                        <MyButton type="submit" onClick={checkUsr}>Send</MyButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;