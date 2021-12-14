import React from 'react';
import './style_page.css';
import MyInput from "../Component/UI/input/MyInput";
import MyButton from "../Component/UI/button/MyButton";
import {useState} from "react";


function LogIn(){
    const [spisok, setSpisok] = useState([]);
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');

    const checkUsr = () => {
        fetch('http://localhost:4000/meetAppBd', {})
    }

        return (
            <div className={"form"} className={"page"}>
                <div className={"App"}>
                    <div className={"App-header"}>
                        <h2>Authorization:</h2>
                        <form method="post" className="reg">
                            <p>
                                <input type="nick" id="nick" name="nick" placeholder={"nick"} required={true}/>
                            </p>
                            <p>
                                <input type="password" id="password" name="password" placeholder={"***********"}
                                       required={true}/>
                            </p>
                            <button type="submit" className="i" id="send_reg" onClick="authorization()">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
}

export default LogIn;