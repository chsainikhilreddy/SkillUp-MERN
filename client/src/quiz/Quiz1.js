import React, { Component } from "react";

export default class Quiz extends Component {
    render() {
        return (
            <div>
                {/* <iframe frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            width="100%" 
            height="100%" 
            scrolling="auto" src="http://localhost:4000/connect.html" title="Java Quiz"></iframe> <br /> */}

            <frameset rows="100%,*">
                <frame src="http://localhost:4000">
                    <noframes>
            
                        <body>
            
                        </body>
                    </noframes>
                    </frame>
            </frameset>
            </div>
        );
    }
}