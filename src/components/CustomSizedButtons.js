
import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const marginStyle = {
  marginTop: 20,
  marginBottom: 20
};

const CustomSizedButtons = () =>
  <div>
    <ButtonToolbar style={marginStyle}>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Button bsSize="large">Large button</Button>
    </ButtonToolbar>

    <ButtonToolbar style={marginStyle}>
      <Button bsStyle="primary">Default button</Button>
      <Button>Default button</Button>
    </ButtonToolbar>

    <ButtonToolbar style={marginStyle}>
      <Button bsStyle="primary" bsSize="small">Small button</Button>
      <Button bsSize="small">Small button</Button>
    </ButtonToolbar>

    <ButtonToolbar style={marginStyle}>
      <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
      <Button bsSize="xsmall">Extra small button</Button>
    </ButtonToolbar>
  </div>;

export default CustomSizedButtons;
