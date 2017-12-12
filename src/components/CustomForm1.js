
import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class CustomForm1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;

    if (length > 10)
      return 'success';
    else if (length > 5)
      return 'warning';
    else if (length > 0)
      return 'error';

    return null;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Form>
        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </Form>
    );
  }
};

export default CustomForm1;
