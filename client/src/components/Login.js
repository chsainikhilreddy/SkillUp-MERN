import React from "react";
import { useHistory } from "react-router-dom";




// export default class Login extends Component {
const Login = () => {
        const history = useHistory();
        const HandleLogin = (e) => {
            e.preventDefault();
            // const history = useHistory();
            // localStorage.setItem("user_auth_token", "Ben");
            // this.props.history.push("MainPage");
            
            // const username = e.target.username.value;
            const email = document.getElementById("input-email").value;//e.target.email.value;
            const password = document.getElementById("input-password").value;//e.target.password.value;
            console.log(email, password);
            // data[0].username, password
            fetch(`http://localhost:5000/login?email=${email}&password=${password}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data[0]) {
                        localStorage.setItem("user_name", data[0].username);
                        localStorage.setItem("user_courses", data[0].courses);
                        // this.props.history.push("MainPage");
                        history.push("/MainPage");
                        // alert("Success");
                    } /*else {
                        alert("Failed");
                    } */
                    // history.push("/dash");
                });
            // e.target.username.value = "";
            // e.target.email.value = "";
            // e.target.password.value = "";
        }
    return (
        // <form onSubmit ={handleLogin}>
        //     <input type="text" name="username" placeholder="Username"/>
        //     <input type="password" name="password" placeholder="Password"/>
        //     <button>Login</button>
        // </form>
        <form>
            <h3>Log in</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="email" id="input-email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" id="input-password" className="form-control" placeholder="Enter password" />
            </div>

            <button onClick={HandleLogin} type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        </form>
    );
}

export default Login;