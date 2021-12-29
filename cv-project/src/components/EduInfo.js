import React, { Component } from 'react';
import '../styles/questions.css'

class EduInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="questions">
                <label htmlFor="#">School Name: </label>
                <input type="text" required/>
                <br />
                <label htmlFor="#">Title of Study: </label>
                <input type="text" required/>
                <br />
                <label htmlFor="#">From: </label>
                <input type="date" required/>
                <br />
                <label htmlFor="#">To: </label>
                <input type="date" required/>
                <br />
            </div>
        )
    }
};

export default EduInfo;