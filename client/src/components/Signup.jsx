import React, { Component } from "react";
// import { useHistory } from "react-router-dom";

function HandleSignup(e) {
    e.preventDefault();
    // const history = useHistory();
    const username = document.getElementById("input-username").value;//e.target.username.value;
    const email = document.getElementById("input-email").value;
    const password = document.getElementById("input-password").value;//e.target.password.value;
    console.log(username, email, password);

    fetch(`http://localhost:5000/signup?username=${username}&email=${email}&password=${password}`)
        .then(res => res.json())
        .then(data => console.log(data));
    // e.target.username.value = "";
    // e.target.password.value = "";
}
export default class Signup extends Component {
    render() {
        return (
            // <form onSubmit ={handleSignup}>
            //     <input type="text" name="username" placeholder="Username"/>
            //     <input type="password" name="password" placeholder="Password"/>
            //     <button>Sign up</button>
            // </form>

            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" id="input-username" className="form-control" placeholder="Enter name" />
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="input-email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="input-password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={HandleSignup} type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            </form>
        );
    }
}