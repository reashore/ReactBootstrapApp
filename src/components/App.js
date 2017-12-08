
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

        <Panel header="Button Sizing Demo">
          <CustomSizedButtons />
        </Panel>

        <Panel header="Grid Layout Demo">
          <CustomGrid />
        </Panel>

        <Button bsStyle="primary" bsSize="large" onClick={this.open}>Launch Modal Dialog</Button>

        {/* <CustomModalDialog close={this.close} show={this.state.showModal}  */}

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. </p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. </p>
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
