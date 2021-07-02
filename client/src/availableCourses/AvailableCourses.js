//import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";
// import Button from "react-bootstrap/Button";
import React from "react";
// import {Link} from "react-router-dom";
import {Button, Card, ListGroup, ListGroupItem, CardColumns} from "react-bootstrap";
// import {Card,CardDeck} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from "react-bootstrap";
// import  CardColumns from "react-bootstrap/CardColumns";



const Available = () => {
    const username = localStorage.getItem("user_name");
    const enrollCourseHandler = (e, course) => {
        e.preventDefault();
        if (e.target.innerHTML === "Enrolled") {
            return ;
        }
        e.target.innerHTML = "Enrolled";
        // const username = localStorage.getItem("user_auth_token");
        console.log(course, username);
        
        fetch(`http://localhost:5000/getUserData?username=${username}`)
            .then(res => res.json())
            .then(data => {
                const registeredCourses = data[0].courses + course;
                const finishedCourses = localStorage.getItem("finishedCourses");
                console.log(data[0].courses);
                localStorage.setItem("user_courses", registeredCourses);
                fetch(`http://localhost:5000/updateCourses?username=${username}&courses=${registeredCourses}&finishedCourses=${finishedCourses}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                });
            });
        // console.log(registeredCourses);
    };

    const initialize = () => {
        // e.preventDefault();
        var registeredCourses;
        console.log(username);
        // if (localStorage.getItem("user_courses") !== null) {
        //     // registeredCourses = localStorage.getItem("user_courses");
        //     registeredCourses = "1";
        //     console.log(registeredCourses + " hi ");
        //     [...registeredCourses].forEach((item) => document.getElementById(item + "Button").innerHTML = "Enrolled");
        // } else {
            fetch(`http://localhost:5000/getUserData?username=${username}`)
                .then(res => res.json())
                .then(data => {
                    registeredCourses = data[0].courses;
                    // console.log(registeredCourses);
                    localStorage.setItem("user_courses", data[0].courses);
                    for (const item of registeredCourses) {
                        // console.log(item);
                        if ("123".includes(item)) {
                            document.getElementById(item + "Button").innerHTML = "Enrolled";
                        }
                    }
                });
        // }
    };
    initialize();
    
    return (
    <div className="picture">
        
        <div>
            <h3 style= {{ position: 'absolute', top: '15%', left: '22%'}}> <b> Available courses</b> </h3>
            <p style={{ position: 'absolute',top: '18%', left: '21%' }}>______________________________________________________________________________________________________</p>
        </div>
        <CardColumns style={{width: '40rem'}}>     
            <Card style={{ width: '18rem', position: 'absolute', top:'24%', left: '22%', color: 'blue', background: 'white' }}>
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
                  <Button id = "1Button" onClick={e => enrollCourseHandler(e,"1")} style={{ width: '150px', height: '40px'}} variant="primary">Enroll</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', position: 'absolute', top: '24%', left: '45%', color: 'blue', background: 'white' }}>
                  <Card.Img style={{height: '150px'}} variant="top" src="https://content.techgig.com/thumb/msid-80100245,width-1200,height-900,resizemode-4/80100245.jpg" />
                  <Card.Body>
                      <Card.Title><b>PYTHON</b></Card.Title>
                      <Card.Text>
                      Python is an interpreted, object-oriented, high-level programming language with dynamic semantics
                      </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                      <ListGroupItem style= {{background: 'white'}}>Time to complete</ListGroupItem>
                      <ListGroupItem style= {{background: 'white'}}>4 Hours</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                  <Button id = "2Button" onClick={e => enrollCourseHandler(e,"2")} style={{ width: '150px', height: '40px'}} variant="primary">Enroll</Button>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem', position: 'absolute', top: '24%', left: '68%', color: 'blue', background: 'white' }}>
                  <Card.Img style={{height: '150px'}} variant="top" src="https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648" />
                  <Card.Body>
                      <Card.Title><b>Cpp</b></Card.Title>
                      <Card.Text>
                      C++ is a powerful programming language, created by Bjarne Stroustrup as an extension of the C.
                      </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                      <ListGroupItem style= {{background: 'white'}}>Time to complete</ListGroupItem>
                      <ListGroupItem style= {{background: 'white'}}>4 Hours</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                  <Button id = "3Button" onClick={e => enrollCourseHandler(e,"3")} style={{ width: '150px', height: '40px'}} variant="primary">Enroll</Button>
                  </Card.Body>
              </Card>
      </CardColumns>
    </div>
    );
}

export default Available;
