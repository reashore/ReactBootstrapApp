
import React, { Component } from 'react';
import { Panel, Modal, Button } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import CustomJumbotron from './CustomJumbotron';
import CustomButtonBar from './CustomButtonBar';
import CustomGrid from './CustomGrid';
import CustomSizedButtons from './CustomSizedButtons';
import CustomForm1 from './CustomForm1';
import CustomForm from './CustomForm';

// Does not yet work with Bootstrap 4.0.0-beta.2
// npm install bootstrap@4.0.0-beta.2
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
    return (
      <div className="container">
        <CustomNavbar />

        <CustomJumbotron />

        <Panel header="Button Type Demo" bsStyle="primary">
          <CustomButtonBar />
        </Panel>

        <Panel header="Button Sizing Demo" bsStyle="primary">
          <CustomSizedButtons />
        </Panel>

        <Panel header="Grid Layout Demo" bsStyle="primary">
          <CustomGrid />
        </Panel>

        <Panel header="Modal Dialog Demo" bsStyle="primary">
          <Button bsStyle="primary" onClick={this.open}>Launch Modal Dialog</Button>
        </Panel>

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

        <Panel header="CustomForm1 Demo" bsStyle="primary">
          <CustomForm1 />
        </Panel>

        <CustomForm />
      </div>
    );
  }
}

export default App;
