import React, { Component } from 'react';
import GeneralPrint from './printVersion/generalPrint'
import '../styles/questions.css'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: '',
            show: true,
        }
    };

    // Stores the input value in each state 
    handleFirstName = (e) => {this.setState({firstName: e.target.value});};
    handleLastName = (e) => {this.setState({lastName: e.target.value})};
    handleEmail = (e) => {this.setState({email: e.target.value})};
    handlePhone = (e) => {this.setState({phoneNum: e.target.value})};

    // When clicking save button, makes general questions comp invisible and make general print visible
    onSave = (e) => {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { firstName, lastName, email, phoneNum, show } = this.state;

        return(
            <div>
                <div>
                    {show ? 
                        <div className="general questions">
                            <label htmlFor="#">First Name: </label>
                            <input 
                                type="text" 
                                onChange={this.handleFirstName}
                                required/>
                            <br />
                            <label htmlFor="#">Last Name: </label>
                            <input 
                                type="text" 
                                onChange={this.handleLastName}
                                required/>
                            <br />
                            <label htmlFor="#">Email: </label>
                            <input 
                                type="email" 
                                onChange={this.handleEmail}
                                required/>
                            <br />
                            <label htmlFor="#">Phone Number: </label>
                            <input 
                                type="tel" 
                                onChange={this.handlePhone}
                                required
                            />
                            <br />
                        </div>
                     : null}
                </div>
                <div>
                    {!show ? 
                    <GeneralPrint 
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phoneNum={phoneNum}
                    />
                    : null}
                </div>
                <div className="btnContainer">
                    {show ? 
                    <button 
                    type="submit" 
                    onClick={this.onSave}
                    className="submitBtn">
                        Save
                    </button> 
                    : <button 
                    type="submit" 
                    onClick={this.onSave}
                    className="submitBtn">
                        Edit
                    </button>}
                </div>
            </div>   
        )
    }
};

export default GeneralInfo;