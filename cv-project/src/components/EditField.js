import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import EduInfo from './EduInfo';
import WorkInfo from './WorkInfo';
import '../styles/EditField.css';

class EditField extends Component {
    constructor(props) {
        super(props);
      }

    printPage() {
        window.print();
    }

    render() {
        return(
           <div className="EditField">
                <div className="general section">
                    <h1 className="FieldTitle">General Information</h1>
                    <form className="InputField field">
                        <GeneralInfo />
                    </form>
                </div>

                <div className="educational section">
                    <h1 className="FieldTitle">Educational Experience</h1>
                    <form className="InputField field">
                        <EduInfo />
                    </form>
                </div>

                <div className="work section">
                    <h1 className="FieldTitle">Work Experience</h1>
                    <form className="InputField field">
                        <WorkInfo />
                    </form>
                </div>
                <button className="printBtn" onClick={this.printPage}>Print Your CV</button>
           </div>
        );
    }
};

export default EditField;