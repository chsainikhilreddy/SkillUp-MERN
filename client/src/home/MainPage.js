import React, { Component } from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Button, Card, ListGroup, ListGroupItem, CardColumns} from "react-bootstrap";

export default class MainPage extends Component {
    render() {
        require("./HomePage.css");
        const initialize = () => {
            setTimeout(function() {
                var courses = localStorage.getItem("user_courses");
                var finishedCourses = localStorage.getItem("finishedCourses");
                console.log(courses);
                if (!courses) {
                    return ;
                }
                for (const course of courses) {
                    if ("123".includes(course)) {
                        document.getElementById(course + "Card").className = "unblocked";
                        if (finishedCourses && finishedCourses.includes(course)) {
                            document.getElementById(course + "Button").innerHTML = "Completed!";
                        }
                    }
                }
            }, 10);
            
        }
        initialize();
        return (
            <div className= "bodyBack">
                <nav className = "navbarMain">
                    <div className = "nav_icon"></div>
                    <div className ="dashboard"> <h1><b> DASHBOARD </b></h1></div>
                    <DropdownButton id="dropdown-basic-button" title="Announcements" style={{ position: 'fixed', width: '18rem', left: '85%' , top: "10%" }}>
                        {/* <Dropdown.Item href="#/action-1"> New Course Added 'Python'</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item href="#/action-2">New Course Added 'Java'</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider> */}
                        <Dropdown.Item href="#">Welcome to Skill Up</Dropdown.Item>
                        {/* <Dropdown.Divider></Dropdown.Divider> */}
                    </DropdownButton>
                </nav>
                
                <div>
                    <h3 style = {{ position: 'absolute', top: '30%', left: '25%' } } > My Courses </h3> 
                    <p style = {{ position: 'absolute', top: '35%', left: '25%' } } > ______________________________________________________________________________________________________ </p> 
                    <div>
                        <div className= "courseCard">
                            <CardColumns style={{width: '40rem'}}>     
                                <Card  id = "1Card" className = "blocked" style={{ width: '18rem', position: 'absolute', top:'44%', left: '22%', color: 'blue', background: 'white' }}>
                                    <Card.Img style={{height: '150px'}}variant="top" src="https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-881x441.jpg" />
                                    <Card.Body>
                                        <Card.Title><b>JAVA</b></Card.Title>
                                        <Card.Text>
                                        In this course, you’ll learn the foundations of object-oriented programming.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem style= {{background: 'white'}}>Time to complete</ListGroupItem>
                                        <ListGroupItem style= {{background: 'white'}}>4 Hours</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                    <Link to='/MyCourseJava'><Button style={{ width: '150px', height: '40px'}} variant="primary" id="1Button">Open Course</Button></Link>
                                    </Card.Body>
                                </Card>
                                <Card id = "2Card" className = "blocked" style={{ width: '18rem', position: 'absolute', top: '44%', left: '45%', color: 'blue', background: 'white' }}>
                                    <Card.Img style={{height: '150px'}} variant="top" src="https://content.techgig.com/thumb/msid-80100245,width-1200,height-900,resizemode-4/80100245.jpg" />
                                    <Card.Body>
                                        <Card.Title><b>PYTHON</b></Card.Title>
                                        <Card.Text>
                                        Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem style= {{background: 'white'}}>Time to complete</ListGroupItem>
                                        <ListGroupItem style= {{background: 'white'}}>3 Hours</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                    <Link to='/MyCoursePython'><Button style={{ width: '150px', height: '40px'}} variant="primary" id="2Button">Open Course</Button></Link>
                                    </Card.Body>
                                </Card>
                                <Card id = "3Card" className = "blocked" style={{ width: '18rem', position: 'absolute', top: '44%', left: '68%', color: 'blue', background: 'white' }}>
                                    <Card.Img style={{height: '150px'}} variant="top" src="https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648" />
                                    <Card.Body>
                                        <Card.Title><b>CPP</b></Card.Title>
                                        <Card.Text>
                                        C++ is an object oriented programming language, created as an extension of the C.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem style= {{background: 'white'}}>Time to complete</ListGroupItem>
                                        <ListGroupItem style= {{background: 'white'}}>4 Hours</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                    <Link to='MyCourseCPP'><Button style={{ width: '150px', height: '40px'}} variant="primary" id="3Button">Open Course</Button></Link>
                                    </Card.Body>
                                </Card>
                            </CardColumns>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}
