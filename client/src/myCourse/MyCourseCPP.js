import {Button} from "react-bootstrap";
// import "./MyCourse.css";
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';


const MyCourseCPP = () => {
    require("./MyCourse.css");

    const [isListening, setIsListening] = useState(false);
    const [note, setNote] = useState(null);
    const [savedNotes, setSavedNotes] = useState([]);

    useEffect(() => {
        handleListen()
        }, [isListening])

        const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
            console.log('continue..')
            mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
            console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            console.log(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    function SummaryHandler1(e) {
        e.preventDefault();
        document.getElementById("subject1").value = "welcome back aliens my name is Levin ready and let's continue the series on Python now we have started talking about objects right and we move towards classand then we are discussed about in hitens now it's time to focus on one of the major concept in oops which is volumeorphism oh that's a weird word right now we talked about polymorphism it's breakdown this word Polly and morphism so poly means many right and when you say more it means forms so that means one thing can take multiple forms example like as human you know we have different forms as the situation changes we change our cell for example we behave differently different location at office we behave differently when we are with our friends we behave differently so we are polymorphic in the same way we talk about object oriented objects he'll have multiple forms so this concept is very important when you talk about software development so we use this concept a lot when it comes to loose coupling dependency injection we also have a concept of interfaces which was later the four ways of implementing polymorphism the first one is duck typing in Python the second one is operator overloading then we have method overloading and method overriding in the next few videos we are going to talk about all these topics okay and one of the interesting one is duck typing especially if you're coming from different background let's say if you have already seen Java or C++ or C sharp this is benefit for you because in Java or in c-sharp we have to mention the type of the variable which you work with right you have to mention the type of object you work with but Python we have something different right so we'll see that in the next video so polymorphism basically is one thing with multiple forms and how exactly we can have driven that that we'll see in the next video";
    }


    function SummaryHandler2(e) {
        e.preventDefault();
        document.getElementById("subject2").value = "welcome back aliens - I've been ready and let's continue the series on Python chat at this point we have talked about functions and in that functions were passing some arguments right so we try different type of arguments we have tried positions default right now can we pass a list of elements is it possible because see we were passing one or two elements or we were using the variable length argument can I pass a list so we'll try we'll try a simple example just to make you understand how can you pass at least and then we'll try to return multiple values not just one a function can return multiple values like we have tried that we have done that so we will get a function which will take multiple values or which will take at least I it will return multiple values as well so if I pass at least in that list you will be having multiple values you just need to return the number of even numbers and odd numbers right so we have to return two values the number of even numbers and number of odd numbers so the problem statement is if a user gives you a list of elements you need to pass that least in a function that function will return you the number of even and odd numbers and then you have to return two values right so let's do it so what I want is I want to create a function which will return me two values one is even number and odd number I mean number of even numbers and number of odd numbers in the list and the function name is let's take down and this count will take at least right and we don't have a list here so let's get at least some so this is equal to again you can take this input from the user okay so you can try that as assignment if you take this list as as a user input so let's take the input from the user okay so now we got some values okay I don't know how many what numbers and our numbers are there that must count it here so we got 1 2 3 4 5 6 I guess we have 6 even numbers and then we have 1 2 3 odd numbers I guess let's count it with the code okay and that's why we could itself as write because we are very bad with calculation so here I will just pass the list and it will count so we don't have this function count here so let's define itself as I define count and this will take a list of course and let's define it let's create something so I will take two values here one is even which will count the even numbers initial value of K 1 will be 0 and we'll say odd numbers into value of odd will be 0 ok now once I've got this 2 very well the next thing that we do is we have to use a for loop right because we need to increment the values so say for in and every time you get that even number or an odd number you just need to increment even or odd right so in this case you will use a condition he fells right so you would say if I'm or 2 is equal to 0 that means it's an even number if it is true then you will say even plus equal to 1 that's simple right and then in the else part he will say all right so odd plus equal to 1 so every time you get that even number you will increment the value of even if we turn to get odd number you will say increment the value of odd now once you have done that he was simply done two values now one is even and one is odd see there is no compulsion that your variable then should be same as the global so you can see here we're using even here we are using even so there's no combustion that yep it should be same you can say e oh that's fine completely fine now once you've got this two variables here let's print even and also print R ok and let's run this code and it works you can see we got six even numbers and we got three odd numbers actually counted okay all you can also print this is on top of format I don't know the back big friend have format but let's try so I will say even and then I will give I will give up :I want to print even : value and then odd : / value so here I want to replace this with the actual values right so the query Becket should be replaced with the actual value and that's where we use a string which is a string which is even number and then odd we have to use dot so in string we have this option of function so we have to say dot format because this format is a function belongs to string and we have to pass two parameters here the first one is even value and odd value because we have to replace two formats why this one and the next value brackets and let's run this and we call it regard even six and all three so that's what in this we have we have talked about you can try different examples here you can check how many is three our segment here the assignment is take ten names from the user and then pound and display the number of users who has length more than five letters okay so that's your assignment so that's it see you in the next video I hope you enjoy this is let me know in the comment section and this subscribe for further videos bye bye you";
    }

    function SummaryHandler3(e) {
        e.preventDefault();
        document.getElementById("subject3").value = "welcome back aliens my name is Ivan ready and in this video we will talk about how do you access the previous commands in IDL II now when you work on Python you know so we write a lot of code right example if I want to add two numbers or if I want to perform some operation like X equal to two plus four plus nine now in this case when you say hit enter and if you want to access the same command again can you do it normally what happens iswhen you work on CMD what we'd get is let's see if if I perform any operation here example up again this is not a command in Windows but let's try so when I say up and if I want to get the same command again we just need to press up arrow right so when you say up arrow you will get this you know we know when you work with ipconfig and you get this and again if I want the same command you can say enter just you just say up and enter you get it that's not the case with IDL e in this case if you want to access that we don't have by default option so what you have to do is you just need to go to options and then you have to click on configure ideally and here you need to click on keys now we need to find the history right so just scroll down to search for history so it is your history previous now by default it will be I guess alt P in your machine because I've changed it in my earlier session if you want to change it just click on that and select get new keys for selection and here you can select the up arrow so you can see we have up arrow click on OK and click on OK now so if you want to access the last element or last command you just say up add when you get the command now of course when you are new to Python you will not be knowing this but once you start working on it you will be needing this command a lot so this is how you find the previous command I got some more questions you know after the video so let's say for if you reach here and in Windows we have this command every CLS so when you say CLS it clears the command I know that's not the case here you know so that's not the case in ideal you cannot simply clear this screen even if I try we don't have anything here I guess you can write some script which works on Python shell but that's not that doesn't work and ideally the only way you can do that is by closing idea in reopen it okay now if you have seen my videos in my videos I have done that you know so I was scrolling up but I was not rolling in ideally so it was a animation effect when I was editing my video I made sure that it goes up so that you can you can see those things normally so the editing is done so that you can view it so I have not scrolled on idla so as for my knowledge it is not possible maybe there might be some hidden script or some technique so if you know that let me know in the comment section so that it will be helpful for everyone so that's it that's how you get the previous command and that's how you that's that's the answer for your question about how to clear the screen so that's it everyone thanks for watching I hope you're enjoying my CDs rekt me in the comment section so that's it bye bye";
    }


    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }
    const endCourse = (e) => {
        e.preventDefault();
        const username = localStorage.getItem("user_name");
        const registeredCourses = localStorage.getItem("user_courses");
        var finishedCourses = localStorage.getItem("finishedCourses");
        if (finishedCourses !== null && finishedCourses !== undefined && finishedCourses.includes("3")) {
            return ;
        }
        finishedCourses += "3";
        localStorage.setItem("finishedCourses", finishedCourses);
        fetch(`http://localhost:5000/updateCourses?username=${username}&courses=${registeredCourses}&finishedCourses=${finishedCourses}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

            });
    }
    return (
            <div>
            <div className="headCourse">
                <h1 ><b>Welcome to C++ Course</b></h1>
                <p> An introductory course to C++.</p>
                <p>C++ is an object-oriented programming language. It is an extension to C programming.C++ is a general purpose, case-sensitive, free-form programming language that supports object-oriented, procedural and generic programming.C++ is a middle-level language, as it encapsulates both high and low level language features.</p>

                <h2>Course Outline</h2>
                <p>______________________________________________________________________</p>
            </div>
            <div className="bodyCourse">
                <div className="week1">
                <h3>WEEK 1</h3></div>
                <iframe width="760" height="515" src="https://www.youtube.com/embed/18c3MTX0PK0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> <br />
                
                <textarea id="subject" name="subject" placeholder="Summary.." ></textarea>
                <Button style={{ position:"absolute", top:"19%" ,width: '150px', height: '40px'}} variant="primary">Summarize </Button><br />
                <textarea id="subject1" className="subject" placeholder="Transcribe..." ></textarea>
                <Button onClick={SummaryHandler1}  style={{ position:"absolute", top:"26%" ,width: '150px', height: '40px'}} variant="primary">Transcribe</Button><br />
                    <br /><br />
                <Button><Link to='/quiz' style={{color: "white",textDecoration: "none"}}>Quiz-1</Link></Button>
              
            <div className="week1"><h3>WEEK 2</h3></div>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/2BP8NhxjrO0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br />
                <textarea id="subject" name="subject" placeholder="Summary.." ></textarea>
                <Button style={{position:"absolute", top:"51%" , width: '150px', height: '40px'}} variant="primary">Summarize </Button><br />
                <textarea id="subject2" className="subject" placeholder="Transcribe." ></textarea>
                <Button onClick={SummaryHandler2}  style={{ position:"absolute", top:"58%" ,width: '150px', height: '40px'}} variant="primary">Transcribe</Button><br />
                <br /><br />

                <div className="week1"><h3>WEEK 3</h3></div>
                <iframe width="760" height="515" src="https://www.youtube.com/embed/X8nYM8wdNRE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br />
                <textarea id="subject" name="subject" placeholder="Summary.." ></textarea>
                <Button  style={{position:"absolute", top:"84%" , width: '150px', height: '40px'}} variant="primary">Summarize </Button><br />
                <textarea id="subject3" className="subject" placeholder="Transcribe...." ></textarea>
                <Button onClick={SummaryHandler3} style={{position:"absolute", top:"89%" , width: '150px', height: '40px'}} variant="primary">Transcribe</Button><br />
                <br /><br />
                <Button><Link to='/quiz' style={{color: "white",textDecoration: "none"}}>Quiz-2</Link></Button>
                <br /><br />
                <center><Button onClick={endCourse} className="btn btn-secondary" name="end">End Course</Button><br /></center>
            </div>
            
            
            <h1 style={{position:"absolute", top:"500%", left:"25%"}}>Record your own notes Here.</h1>
            <h2 style={{position:"absolute", top:"505%", left:"25%"}}>Voice Notes</h2>
            <div className="container" style={{position:"absolute", top:"515%", left:"30%"}}>
                <div className="box">
                    <h2>Current Note</h2>
                    {isListening ? <span role="img" aria-label="mic">🎙️</span> : <span role="img" aria-label="mic-start">🛑🎙️</span>}
                    <button onClick={handleSaveNote} disabled={!note}>
                        Save Note
                    </button>
                    <button onClick={() => setIsListening(prevState => !prevState)}>
                        Start/Stop
                    </button>
                    <p>{note}</p>
                </div>
                <div className="box">
                    <h2>Notes:</h2>
                    {savedNotes.map(n => (
                        <p key={n}>{n}</p>
                    ))}                
                </div>
            </div>
        </div>
    );
}

export default MyCourseCPP;
