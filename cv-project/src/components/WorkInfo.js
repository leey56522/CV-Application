import React, { Component } from 'react';
import WorkPrint from './printVersion/workPrint'
import '../styles/questions.css'

class WorkInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            position: '',
            description: '',
            fromDate: '',
            toDate: '',
            show: true,
        }
    };

    // Stores the input value in each state 
    handleCompanyName = (e) => {this.setState({companyName: e.target.value});};
    handlePosition = (e) => {this.setState({position: e.target.value})};
    handleDescription = (e) => {this.setState({description: e.target.value})};
    handleFromDate = (e) => {this.setState({fromDate: e.target.value})};
    handleToDate = (e) => {this.setState({toDate: e.target.value})};

    // When clicking save button, makes general questions comp invisible and make general print visible
    onSave = (e) => {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        const { companyName, position, description, fromDate, toDate, show } = this.state;

        return(
            <div>
                <div>
                    {show ? 
                        <div className="general questions">
                            <label htmlFor="#">Company Name: </label>
                            <input 
                                type="text" 
                                onChange={this.handleCompanyName}
                                required/>
                            <br />
                            <label htmlFor="#">Position: </label>
                            <input 
                                type="text" 
                                onChange={this.handlePosition}
                                required/>
                            <br />
                            <label htmlFor="#">Description: </label>
                            <input 
                                type="text" 
                                onChange={this.handleDescription}
                                required/>
                            <br />
                            <label htmlFor="#">From: </label>
                            <input 
                                type="date" 
                                onChange={this.handleFromDate}
                                required
                            />
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
                    <WorkPrint 
                        companyName={companyName}
                        position={position}
                        description={description}
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

export default WorkInfo;