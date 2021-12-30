import React, { Component } from 'react';
import '../../styles/printVer.css'

class GeneralPrint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, email, phoneNum } = this.props;

        return(
            <div className="generalCont">
                <div className="infoCont">
                    <h1>First Name: {firstName}</h1>
                    <h1>Last Name: {lastName}</h1>
                    <h1>Email: {email}</h1>
                    <h1>Phone Number: {phoneNum}</h1>
                </div>
            </div>
        )
    }
};

export default GeneralPrint;