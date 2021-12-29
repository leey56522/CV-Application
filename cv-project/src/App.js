import React, { Component } from 'react';
import './styles/App.css';
import EditField from './components/EditField';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="App">
        <h1 className="title">CV Application Maker</h1>
        <div className="editSection">
          <EditField />
        </div>
      </div>
    );
  }
}

export default App;
