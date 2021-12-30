import React, { Component } from 'react';
import '../../styles/printVer.css'

class WorkPrint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { companyName, position, description, fromDate, toDate } = this.props;

        return(
            <div className="generalCont">
                <div className="infoCont">
                    <h1>Company Name: {companyName}</h1>
                    <h1>Position: {position}</h1>
                    <h1>Description: {description}</h1>
                    <h1>From: {fromDate}</h1>
                    <h1>To: {toDate}</h1>
                </div>
            </div>
        )
    }
};

export default WorkPrint;