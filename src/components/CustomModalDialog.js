
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

// not working
class CustomModalDialog extends Component {
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
      <Modal show={this.showModal} onHide={this.close}>
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
    );
  }
}

export default CustomModalDialog;
