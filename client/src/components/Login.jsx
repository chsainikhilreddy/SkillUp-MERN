import React, { Component } from "react";
// import { useHistory } from "react-router-dom";

function HandleLogin(e) {
    e.preventDefault();
    // const history = useHistory();
    // const username = e.target.username.value;
    const email = document.getElementById("input-email").value;//e.target.email.value;
    const password = document.getElementById("input-password").value;//e.target.password.value;
    console.log(email, password);
    // data[0].username, password
    fetch(`http://localhost:5000/login?email=${email}&password=${password}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data[0]) {
                alert("Success");
            } else {
                alert("Failed");
            }
        });
    // e.target.username.value = "";
    // e.target.email.value = "";
    // e.target.password.value = "";
}

export default class Login extends Component {

    render() {
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
}

