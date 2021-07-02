import React from 'react'
import './Profile.css';


const Profile = () => {
    
    const UpdateDetails = (e) => {
        // e.preventDefault();
        
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
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Username" required /></div>
                                {/* <div className="col-md-6"><input type="text" className="form-control" placeholder="Last Name" required /></div> */}
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><input type="email" className="form-control" placeholder="Email" required /></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Phone number" required /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="address" required /></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Country" required /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Gender" required /></div>
                                <div className="col-md-6"><input type="date" className="form-control" placeholder="Account Number" required /></div>
                            </div>
                            <div className="mt-5 text-right"><input className="btn btn-primary profile-button" type="submit" value="Submit" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
