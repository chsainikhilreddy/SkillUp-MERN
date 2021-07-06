import React from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
        const history = useHistory();
        const HandleLogin = (e) => {
            e.preventDefault();
            const email = document.getElementById("input-email").value;
            const password = document.getElementById("input-password").value;
            console.log(email, password);
            fetch(`http://localhost:5000/login?email=${email}&password=${password}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data[0]) {
                        localStorage.setItem("user_name", data[0].username);
                        localStorage.setItem("user_courses", data[0].courses);
                        history.push("/MainPage");
                    } else {
                        alert("Given user name or password is incorrect.");
                        window.location.reload();
                    }
                });
        }
    return (
        <form onSubmit={HandleLogin}>
            <h3>Log in</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="email" id="input-email" className="form-control" placeholder="Enter email" required />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" id="input-password" className="form-control" placeholder="Enter password" required />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        </form>
    );
}

export default Login;