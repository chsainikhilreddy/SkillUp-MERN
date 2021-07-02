import {Button} from "react-bootstrap";
// import "./MyCourse.css";
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';



const MyCourseJava = () => {
    require("./MyCourse.css");
    
    const [isListening, setIsListening] = useState(false);
    const [note, setNote] = useState(null);
    const [savedNotes, setSavedNotes] = useState([]);

    useEffect(() => {
        handleListen();
    }, [isListening]);

    const handleListen = () => {
        if (isListening) {
            mic.start();
            mic.onend = () => {
            console.log('continue..')
            mic.start();
            }
        } else {
            mic.stop();
            mic.onend = () => {
            console.log('Stopped Mic on Click');
            }
        }
        mic.onstart = () => {
            console.log('Mics on');
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
    function SummaryHandler(e, week){
        e.preventDefault();
        if (week === "1") {
            document.getElementById("subject1").value = "hello everyone welcome to today's core learnings in this video we'll talk about boolean so we'll talk about what is bullion and how to inverse a booleanorder to invert a boolean value so if wetalk about a data type like int or float so in this int data type when you create a variable it will have a huge range of numbers and if we talk about float to flow it supports the point values right now let's say you want to write a callfor facto a prime number or some case in which you have to check for a flag if that true if that flag is true or falseway to check for conditions so in C programming and C++ whenever you want tocheck the sum condition we had to return 1 or 0 if it is true we have to use 1 ifit is false we have to represent using 0but in Java we have a grid type call as boolean so boolean is a primitive data type in Java for vampa class we can useboolean with capital B so that's upclass here so either you can use booleanwith capital B or you can use boolean B small B so small B bullion is yourprimitive data type and capital B isyour wrapper class so we can define avariable using boolean I will say boolean be equal to so the so let mejust write B and let's try to print thevalue of B now if I try to print it willgive me an error so we need to specifysome initial values so let's say let me say it is as true so I'm sure specifying 1 or 0 you can specify true and if I run this code you can see we got the output as true right so we can either assign a value which is true or false but it's how we need to check how to inverse a variable so what we can simply do is to invert a variable we have to use this operator which is estimation operatorwhich is also not operator and you to specify s clementa exclamation B which is not B so if B value is true it will return false if it is B values false it will return you a true value and if I run this code false so that's a way to use a boolean value or boolean data type";
        } else if(week === "2") {
            document.getElementById("subject2").value="so in the last video we have seen how to use anonymous class right so let me repeat what we have seen so we can create an anonymous class by specifying the object and then the implementation of it normally what happens is we create a class and then we create the object right but in anonymous class we first create the object and then we specified the implementation of it I mean what exactly that that object is so let's try to implement that concept in interface so an interface what we what we have is that if you focus on this implementer class the only purpose of that class is to implement ABC right since we wanted the object of ABC we have created a class here which implements ABC and then we can say ABC obj equals a new implementer and we can call it what if we I can simply say a new ABC will that work and the answer is no is because you cannot create the object of interface you can see that it is giving you a error you cannot instantiate the type ABC because in ABC's interface right now why we cannot create the order of interfaces because it doesn't have the implementation what if I can just provide the limitation here itself or something like in an anonymous class I can create this method or I can just copy this code and if they should here so I can just create a class and the method definition so I don't need this class right so if you can focus on this this thing here now we have an object of ABC which also has the implementation which is void show so we don't need that class you can see that we don't have a class there and if I run this code you can see we got the output as anything because we are printing anything here and if you change this text if I say and the best and if you run this code you can see we got the output as I'm depressed so that's how you use anonymous class to instantiate the interface the advantages it will not waste lots of your memory when you use a normal class it creates a class file this will also create a class file but this will be used only in this particular class you cannot reuse this definition so if you see if your idea is not to reuse the definition you can always go for anonymous class in fact it is my favorite afters after some videos you will understand the real power of anonymous class so stay tuned for that but you can create the object of interface using anonymous class so we can say interface I mean ABC obj equal to new ABC and we can provide the implementation here itself we don't have to create a new class for that so yeah that's about this video the next video will to see the types of interfaces";
        } else {
            document.getElementById("subject3").value="it's static and import so in this video we'll talk about static import now when you want to work with the let's say you want to print something in in Java let's so you want to play in hello so when you want to print something we always use system dot out dot println and in bracket we mentioned the parameters beyond two you want to Train now this print Ln it's a method which belongs to print stream class and in order to use a println we need to create object of print stream which is out and Java says don't worry I have already created an object for you and it below it resides in a class system now this out object it's a it's a static reference so you can see it's a static reference and that's why we have mentioned here static so whenever you want to work or when you want to call out we need to use system so it's a qualified way of calling out right now let's say you want to print hundred statements to print those hundred statements we want to use 100 system dot out dot println now sure of doing that what we can simply do is we can say import Java dot lines in a system belongs to line package and we say system and we can give a semicolon but hold on wait also if I remove this will it work now we need to also mention there is something called as out here so we are importing what was the error now I've made some mistake is it there's a problem oh what's the problem here now the problem is this out is not a normal object is the static reference ID so we have to mention a key word here which is called as study so we have to mention use import static space Java dot Lang dot system dot out and the advantage will be do not have to mention this system class every time you want to use this you can simply say out dot println simple right that's how you use static inputs so just to expand this example I have a class created here which is called as sample now you can see in this sample class I have a method called as show which is a static method and in order to call this show we need to use sample as a qualifier right so you have to mention in order to call show we have to mention sample dot show so every time you want to call show dimensions sample there and that's why we can print hello and hi right hi this hi is printed using this show method but instead of using that what we can simply do is we can say we can import R which is a package name triple a sample dot we can mention show but again this show is not a normal class as the method right we are also starting method we have to mention that as a with the above static keyboard so when we mention static keyboard we don't have to mention sample we can simply use show and control ship hi all right so now let's run this so if I run this you can see again hello hi simple right and that's how we use static imports in Java so yeah thanks for watching and make sure you subscribe my channel for further videos";
        }
    }
    function Summary(e, week){ 
        e.preventDefault();
        if (week === "1") {
            document.getElementById("summary1").value = "In this video we'll talk about what is boolean and how to inverse a boolean We'll also talk about how you can invert a data type like int or float And we'll also look at how to use the C programming language";
        } else if(week === "2") {
            document.getElementById("summary2").value="Anonymous class can be used to create an object and then the implementation of it It will not waste lots of your memory when you use a normal class which creates a class file but this will be used only in this particular class you cannot reuse this definition If you run this code you can see we got the output as I'm depressed";
        } else {
            document.getElementById("summary3").value="In this video we'll talk about static import When you want to print something in in Java we always use system dot out dot println The advantage will be do not have to mention this system class every time you call out It's a good way of working with Java";
        }
    }
    
    const endCourse = (e) => {
        e.preventDefault();
        const username = localStorage.getItem("user_name");
        const registeredCourses = localStorage.getItem("user_courses");
        var finishedCourses = localStorage.getItem("finishedCourses");
        if (finishedCourses !== null && finishedCourses !== undefined && finishedCourses.includes("1")) {
            return ;
        }
        if (!finishedCourses) {
            finishedCourses = "";
        }
        finishedCourses += "1";
        localStorage.setItem("finishedCourses", finishedCourses); 
        fetch(`http://localhost:5000/updateCourses?username=${username}&courses=${registeredCourses}&finishedCourses=${finishedCourses}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

            });
    }
    // function Summary(e) {
    //     e.preventDefault();
    //     var sum = require('sum');
    //     var bigString = "hello everyone welcome to today's core learnings in this video we'll talk about boolean so we'll talk about what is bullion and how to inverse a booleanorder to invert a boolean value so if wetalk about a data type like int or float so in this int data type when you create a variable it will have a huge range of numbers and if we talk about float to flow it supports the point values right now let's say you want to write a callfor facto a prime number or some case in which you have to check for a flag if that true if that flag is true or falseway to check for conditions so in C programming and C++ whenever you want tocheck the sum condition we had to return 1 or 0 if it is true we have to use 1 ifit is false we have to represent using 0but in Java we have a grid type call as boolean so boolean is a primitive data type in Java for vampa class we can useboolean with capital B so that's upclass here so either you can use booleanwith capital B or you can use boolean B small B so small B bullion is yourprimitive data type and capital B isyour wrapper class so we can define avariable using boolean I will say boolean be equal to so the so let mejust write B and let's try to print thevalue of B now if I try to print it willgive me an error so we need to specifysome initial values so let's say let me say it is as true so I'm sure specifying 1 or 0 you can specify true and if I run this code you can see we got the output as true right so we can either assign a value which is true or false but it's how we need to check how to inverse a variable so what we can simply do is to invert a variable we have to use this operator which is estimation operatorwhich is also not operator and you to specify s clementa exclamation B which is not B so if B value is true it will return false if it is B values false it will return you a true value and if I run this code false so that's a way to use a boolean value or boolean data type";
    //     var abstract = sum({ 'corpus': bigString, 'nSentences': 3, 'nWords': 50,  'exclude': ['polar', 'bear'],'emphasise': ['magic'] });
    //     console.log("The short version of corpus is ", abstract.sentences);
    //     document.getElementById("summary1").value = abstract.sentences;
    // }
    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('');
    }
    return (
        <div>
            <div className="headCourse">
                <h1 ><b>Welcome to JAVA</b></h1>
                <p> An introductory course to Java Programming Language.</p>
                <p>Java is a high-level, class-based, object-oriented programming
                language that is designed to have as few implementation dependencies as possible. 
                It is a general-purpose programming language intended to let application developers write once, 
                run anywhere, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. </p>

                <h2>Course Outline</h2>
                <p>______________________________________________________________________</p>
            </div>
            <div className="bodyCourse">
                <div className="week1">
                    <h3>WEEK 1</h3>
                </div>
                <iframe width="760" height="515" src="https://www.youtube.com/embed/8cm1x4bC610" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br />
                <textarea id="summary1" name="subject" placeholder="Summary...." ></textarea>
                <Button onClick = {e => Summary(e, "1")} style={{ position:"absolute", top:"20%" ,width: '150px', height: '40px'}} variant="primary">Summarize </Button><br />
                <textarea  id="subject1" className="subject" placeholder="Transcribe...." ></textarea>
                <Button onClick={e => SummaryHandler(e, "1")}  style={{ position:"absolute", top:"27%" ,width: '150px', height: '40px'}} variant="primary">Transcribe </Button><br /><br />
                
                <Button><Link to='/quiz' style={{color: "white",textDecoration: "none"}}>Quiz-1</Link></Button>

            <div className="week1"><h3>WEEK 2</h3></div>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/fGcKEFwIhhI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> <br />
                <textarea id="summary2" name="subject" placeholder="Summary...." ></textarea>
                <Button onClick = {e => Summary(e, "2")}style={{position:"absolute", top:"52%" , width: '150px', height: '40px'}} variant="primary">Summarize </Button><br />
                <textarea id="subject2" className="subject" placeholder="Transcribe...." ></textarea>
                <Button onClick={e => SummaryHandler(e, "2")} style={{ position:"absolute", top:"58%" ,width: '150px', height: '40px'}} variant="primary">Transcribe</Button><br />
                <br /><br />
                <div className="week1"><h3>WEEK 3</h3></div>
                <iframe width="760" height="515" src="https://www.youtube.com/embed/kHWcA4X2anE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br />
                <textarea id="summary3" name="subject" placeholder="Summary.." ></textarea>
                <Button onClick = {e => Summary(e, "3")}style={{position:"absolute", top:"85%" , width: '150px', height: '40px'}} variant="primary">Summarize </Button><br />
                <textarea id="subject3" className="subject" placeholder="Transcribe...." ></textarea>
                <Button onClick={e => SummaryHandler(e, "3")} style={{position:"absolute", top:"91%" , width: '150px', height: '40px'}} variant="primary">Transcribe</Button><br />
                <Button><Link to='/quiz' style={{color: "white",textDecoration: "none"}}>Quiz-2</Link></Button>
                <br /><br />
                <center><Button onClick={endCourse} className="btn btn-secondary" name="end">End Course</Button><br /></center>
            </div>
            <h1 style={{position:"absolute", top:"495%", left:"25%"}}>Record your own notes Here.</h1>
            <h2 style={{position:"absolute", top:"504%", left:"25%"}}>Voice Notes</h2>
            <div className="container" style={{position:"absolute", top:"510%", left:"35%"}}>
                <div className="box">
                    <h2>Current Note</h2>
                    {isListening ? <span role="img" aria-label="mic">🎙️</span> : <span role="img" aria-label="mic-start">🛑🎙️</span>}
                    <button onClick={handleSaveNote} disabled={!note}>
                        Save Note
                    </button>
                    {/* <div  style={{position:"absolute", top:"500%", left:"25%"}}><button >End course</button></div> */}
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

export default MyCourseJava;
