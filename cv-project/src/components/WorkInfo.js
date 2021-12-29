import React, { Component } from 'react';
import '../styles/questions.css'

class WorkInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="questions">
                <label htmlFor="#">Company Name: </label>
                <input type="text" required/>
                <br />
                <label htmlFor="#">Position: </label>
                <input type="text" required/>
                <br />
                <label htmlFor="#">From: </label>
                <input type="date" required/>
                <br />
                <label htmlFor="#">To: </label>
                <input type="date" required/>
                <br />
                <label htmlFor="#">Description: </label>
                <textarea rows="4" cols="30" required/>
                <br />
            </div>
        )
    }
};

export default WorkInfo;