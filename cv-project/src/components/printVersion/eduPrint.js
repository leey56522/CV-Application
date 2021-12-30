import React, { Component } from 'react';
import '../../styles/printVer.css'

class EduPrint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { schoolName, studyTitle, fromDate, toDate } = this.props;

        return(
            <div className="generalCont">
                <div className="infoCont">
                    <h1>School Name: {schoolName}</h1>
                    <h1>Title of Study: {studyTitle}</h1>
                    <h1>From: {fromDate}</h1>
                    <h1>To: {toDate}</h1>
                </div>
            </div>
        )
    }
};

export default EduPrint;