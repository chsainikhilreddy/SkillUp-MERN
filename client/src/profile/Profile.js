import React from 'react'
import './Profile.css';


const Profile = () => {
    
    const UpdateDetails = (e) => {
        e.preventDefault();
        const old_username = localStorage.getItem("user_name");
        const username = document.getElementById("input-username").value;
        const email = document.getElementById("input-email").value;
        const country = document.getElementById("input-country").value;
        const gender = document.getElementById("input-gender").value;
        const password = document.getElementById("input-password").value;
        
        console.log(old_username, username, email, country, gender);
        fetch(`http://localhost:5000/updateProfile?old_username=${old_username}&username=${username}&email=${email}&country=${country}&gender=${gender}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem("user_name", username);
                window.location.reload(false);
            })
    }
    
    return (
        <div className="container rounded bg-white mt-5" id="hello"> 
            <div className="row">
                <div className="col-md-12">
                    <div className="p-5 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex flex-row align-items-center back">
                                <h2><b>Update Profile</b></h2>
                            </div>
                        </div>
                        <form onSubmit={UpdateDetails}>
                            <div className="row mt-3">
                                <div className="col-md-6"><input type="text" id="input-username" className="form-control" placeholder="Username" required /></div>
                                <div className="col-md-6"><input type="email" id="input-email" className="form-control" placeholder="Email" required /></div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6"><input type="text" id="input-country" className="form-control" placeholder="Country" required /></div>
                                <div className="col-md-6">
                                    <select name="Gender" id="input-gender" className="form-control">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6"><input type="password" id="input-password" className="form-control" placeholder="Password" required /></div>
                            </div>
                            
                            <div className="mt-5 text-center"><input className="btn btn-primary profile-button" type="submit" value="Submit" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
