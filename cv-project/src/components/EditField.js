import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import EduInfo from './EduInfo';
import WorkInfo from './WorkInfo';
import '../styles/EditField.css';

class EditField extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return(
           <div className="EditField">
                <div className="general section">
                    <h1 className="FieldTitle">General Information</h1>
                    <form className="InputField field">
                        <GeneralInfo />
                        <div className="btnContainer">
                            <button type="submit" className="submitBtn">Save</button>
                        </div>
                    </form>
                </div>

                <div className="educational section">
                    <h1 className="FieldTitle">Educational Experience</h1>
                    <form className="InputField field">
                        <EduInfo />
                        <div className="btnContainer">
                            <button type="submit" className="submitBtn">Save</button>
                        </div>
                    </form>
                </div>

                <div className="work section">
                    <h1 className="FieldTitle">Work Experience</h1>
                    <form className="InputField field">
                        <WorkInfo />
                        <div className="btnContainer">
                            <button type="submit" className="submitBtn">Save</button>
                        </div>
                    </form>
                </div>
           </div>
        );
    }
};

export default EditField;