import React from 'react'
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Accomplishments.css'
const FlippyStyle = {
    width: '200px',
    height: '300px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center'
  }
  const JavaDefault = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#41669d',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          alt="image1"
          src="https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-881x441.jpg"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        <br />
        JAVA
        <br/>
        <br/>
        <h5>Congratulations!</h5>
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
        
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#175852',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        You have successfully completed the Java Course!!
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
        </span>
      </BackSide>
    </React.Fragment>);

const PythonDefault = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#ff5050',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        alt="image2"
        src="https://content.techgig.com/thumb/msid-80100245,width-1200,height-900,resizemode-4/80100245.jpg"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      
      PYTHON
      <br/>
      <br/>
        <h5>Congratulations!</h5>
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#666633',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      You have successfully completed the Python Course!!
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
       
      </span>
    </BackSide>
  </React.Fragment>);

const CPPDefault = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#ff6600',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          alt="image3"
          src="https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        <br/>
        CPP
        <br/>
        <br/>
        <h5>Congratulations!</h5>
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#ff3333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        You have successfully completed the CPP Course!!
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
         
        </span>
      </BackSide>
    </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <JavaDefault>

      </JavaDefault>
    </Flippy>
  );
  const FlippyOnHover1 = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <PythonDefault>
   
      </PythonDefault>
    </Flippy>
  );
  const FlippyOnHover2 = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <CPPDefault>
   
      </CPPDefault>
    </Flippy>
  );

const Accomplishments = () => {
    useRef();
    const username = localStorage.getItem("user_name");
    const initialize = () => {
    fetch(`http://localhost:5000/getUserData?username=${username}`)
        .then(res => res.json())
        .then(data => {
          var courses = data[0].finishedCourses;
          if (courses !== null && courses !== undefined) {
            for (const course of courses) {
                if ("123".includes(course)) {
                    // console.log(course + "Card");
                    document.getElementById(course + "Card").className = "unblocked";
                }
            }
          }
        });
    };
    initialize();
    return (
       <div>
           <div style={{position:"absolute", top:"10%", left:"20%"}}>
               <h1 style={{fontFamily: "sans-serif" }}>Your Accomplishments</h1>
           </div>
            <div style={{position:"absolute", top:"20%", left:"30%"}} className= "blocked" id = "1Card">
               <FlippyOnHover flipDirection="horizontal"/>
            </div>
            <div style={{position:"absolute", top:"20%", left:"50%"}} className= "blocked" id = "2Card">
                <FlippyOnHover1 flipDirection="horizontal"/>
            </div>
            <div style={{position:"absolute", top:"20%", left:"70%"}} className= "blocked" id = "3Card">
                <FlippyOnHover2 flipDirection="horizontal"/>
            </div>
       </div>        
      
    )
}

export default Accomplishments;
