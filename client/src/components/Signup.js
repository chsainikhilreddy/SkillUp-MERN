import React from "react";
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com';

const Signup = () => {
    const history = useHistory();
    async function sendMail() {
        const username = document.getElementById("input-username").value;
        const email = document.getElementById("input-email").value;
        await emailjs.send("service_6wucfyi","template_8eh9gia",{username: username, email: email},"user_88yNOvmOO0XBEDoLByDmH")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    async function HandleSignup(e) {
        e.preventDefault();
        const username = document.getElementById("input-username").value;
        const email = document.getElementById("input-email").value;
        const password = document.getElementById("input-password").value;
        const courses = ".";
        console.log(username, email, password, courses);
        await fetch(`http://localhost:5000/signup?username=${username}&email=${email}&password=${password}&courses=${courses}`)
            .then(res => res.json())
            .then(data => {
                if (data.name) {
                    console.log("hii");
                    mySubmitHandler();
                    window.location.reload();
                } else {
                    localStorage.setItem("user_name", username)
                    localStorage.setItem("user_courses", data.courses);
                    sendMail();
                    history.push("/MainPage");
                }
            });
    }
    function mySubmitHandler() {
        alert("An account with this email-id already exists.");
        history.push('/signup');
    }
      
    return (

        <form onSubmit={HandleSignup}>
            <h3>Register</h3>

            <div className="form-group">
                <label>Name</label>
                <input type="text" id="input-username" className="form-control" placeholder="Enter name" required />
            </div>


            <div className="form-group">
                <label>Email</label>
                <input type="email" id="input-email" className="form-control" placeholder="Enter email" required />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" id="input-password" className="form-control" placeholder="Enter password" required />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        </form>
    );
}

export default Signup;