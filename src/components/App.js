
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import CustomTopMenu from './CustomTopMenu';
import CustomJumbotron from './CustomJumbotron';
import CustomButtonBar from './CustomButtonBar';
import CustomGrid from './CustomGrid';

class App extends Component {
  render() {
    const spacingStyle = {
      margin: 20
    };

    return (
      <div className="container">
        <CustomTopMenu />

        <CustomJumbotron />

        <div style={spacingStyle}>
          <CustomButtonBar />
        </div>

        <Panel header="Grid Layout Demo">
          <CustomGrid />
        </Panel>
      </div>
    );
  }
}

export default App;
