import React, { Component } from 'react';
import '../styles/questions.css'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="questions">
                <label htmlFor="#">First Name: </label>
                <input type="text" required/>
                <br />
                <label htmlFor="#">Last Name: </label>
                <input type="text" required/>
                <br />
                <label htmlFor="#">Email: </label>
                <input type="email" required/>
                <br />
                <label htmlFor="#">Phone Number: </label>
                <input 
                    type="tel" 
                    required
                />
                <br />
            </div>
        )
    }
};

export default GeneralInfo;