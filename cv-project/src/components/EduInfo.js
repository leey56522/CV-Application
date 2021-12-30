import React, { Component } from 'react';
import EduPrint from './printVersion/eduPrint'
import '../styles/questions.css'

class EduInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: '',
            studyTitle: '',
            fromDate: '',
            toDate: '',
            show: true,
        }
    };

    // Stores the input value in each state 
    handleSchoolName = (e) => {this.setState({schoolName: e.target.value});};
    handleStudyTitle = (e) => {this.setState({studyTitle: e.target.value})};
    handleFromDate = (e) => {this.setState({fromDate: e.target.value})};
    handleToDate = (e) => {this.setState({toDate: e.target.value})};

    // When clicking save button, makes general questions comp invisible and make general print visible
    onSave = (e) => {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { schoolName, studyTitle, fromDate, toDate, show } = this.state;

        return(
            <div>
                <div>
                    {show ? 
                        <div className="general questions">
                            <label htmlFor="#">School Name: </label>
                            <input 
                                type="text" 
                                onChange={this.handleSchoolName}
                                required/>
                            <br />
                            <label htmlFor="#">Title of Study: </label>
                            <input 
                                type="text" 
                                onChange={this.handleStudyTitle}
                                required/>
                            <br />
                            <label htmlFor="#">From: </label>
                            <input 
                                type="date" 
                                onChange={this.handleFromDate}
                                required/>
                            <br />
                            <label htmlFor="#">To: </label>
                            <input 
                                type="date" 
                                onChange={this.handleToDate}
                                required
                            />
                            <br />
                        </div>
                     : null}
                </div>
                <div>
                    {!show ? 
                    <EduPrint 
                        schoolName={schoolName}
                        studyTitle={studyTitle}
                        fromDate={fromDate}
                        toDate={toDate}
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

export default EduInfo;