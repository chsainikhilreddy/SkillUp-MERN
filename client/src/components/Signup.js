import React from "react";
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com';




const Signup = () => {
    const history = useHistory();
    async function HandleSignup(e) {
        e.preventDefault();
        const username = document.getElementById("input-username").value;//e.target.username.value;
        const email = document.getElementById("input-email").value;
        const password = document.getElementById("input-password").value;//e.target.password.value;
        const courses = ".";
        console.log(username, email, password, courses);
        await emailjs.send("service_6wucfyi","template_8eh9gia",{username: "Ben", email: "benithatripuraneni19@gmail.com"},"user_88yNOvmOO0XBEDoLByDmH")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        await fetch(`http://localhost:5000/signup?username=${username}&email=${email}&password=${password}&courses=${courses}`)
            .then(res => res.json())
            .then(data => console.log(data))
            .then(history.push("/MainPage"));
        
        // e.target.username.value = "";
        // e.target.password.value = "";
    }
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

export default Signup;