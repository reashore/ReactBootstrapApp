
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class CustomModalDialog extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
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
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CustomModalDialog;
