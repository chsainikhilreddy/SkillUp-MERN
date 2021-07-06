import React from 'react'
const AboutUs = () => {
    require("./AboutUs.css");
    return (
        <div id="about">
            <div class="about-section">
                <h1>About Us</h1>
                <center>
                <p className="hello">We firmly believes in disrupting and democratizing educational ecosystem by </p>
                {/* <p className="hello">allowing anyone and everyone to learn from its pool of more than 20000 Subject Matter Experts.</p> */}

                <p className="hello">This project is a web-based application for e-learning programs and training contents.</p>
                  <p className="hello">  The user should login and select the course from the available options.</p>
                <p className="hello">Once they register for a respective course, the user can access the course videos and materials.</p>
                <p className="hello">e-Notes can be prepared from the given videos using speech to text converter.</p>
                <p className="hello">A real time quiz shall be conducted to the registered users of a course in a given time slot scheduled</p>
                <p className="hello"> in the calendar. A leaderboard will be displayed comprising the total score and rank of every user.</p>
                <br /><br /><br /><br /><br /><br /><br />
                <div style={{color: "black"}}>
                    <h2>For any queries:</h2>
                    <p><h4>skillup737@gmail.com</h4></p>
                </div>
            </center>
            </div>
         </div>
    );
};

export default AboutUs;
