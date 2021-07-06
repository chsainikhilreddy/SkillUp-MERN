import React, { Component } from "react";

export default class Quiz extends Component {
    render() {
        return (
            <div>
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