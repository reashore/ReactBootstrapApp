
import React, { Component } from 'react';
import { Panel, Modal, Button } from 'react-bootstrap';
import CustomTopMenu from './CustomTopMenu';
import CustomJumbotron from './CustomJumbotron';
import CustomButtonBar from './CustomButtonBar';
import CustomGrid from './CustomGrid';
import CustomSizedButtons from './CustomSizedButtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const marginStyle = {
      marginTop: 20,
      marginBottom: 20
    };

    return (
      <div className="container">
        <CustomTopMenu />

        <CustomJumbotron />

        <div style={marginStyle}>
          <CustomButtonBar />
        </div>

        <Panel header="Button Sizing Demo" bsStyle="primary">
          <CustomSizedButtons />
        </Panel>

        <Panel header="Grid Layout Demo" bsStyle="primary">
          <CustomGrid />
        </Panel>

        <Button bsStyle="primary" bsSize="large" onClick={this.open}>Launch Modal Dialog</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Text in a modal dialog</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
