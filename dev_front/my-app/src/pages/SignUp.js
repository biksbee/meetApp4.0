import './style_page.css';
const React = require('react');

function SignUp(){
    return (
        <div className={"form"} class={"page"}>
            <h2>Register user:</h2>
            <form action="" method="post" class="reg">
                <p>
                    Name:
                    <input type="username" id="username" name="username" />
                </p>
                <p>Email:
                    <input type="email" id="email" name="email"/>
                </p>
                <p>Nick:
                    <input type="nick" id="nick" name="nick"/>
                </p>
                <p>Age:
                    <input type="age" id="age" name="age"/>
                </p>
                <p>Password:
                    <input type="password" id="password" name="password"/>
                </p>
                <button type="submit" class="i" id="send_reg" onClick="getValue()">Send</button>
            </form>
        </div>
    );
}

export default SignUp;