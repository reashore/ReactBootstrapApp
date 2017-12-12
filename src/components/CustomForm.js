
import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Panel, Grid, Row, Col } from 'react-bootstrap';

const CustomForm = () =>
  <Form>
    <Panel header="CustomForm2 Demo" bsStyle="primary">
      <Grid fluid>
        <Row>
          <Col md={6}>
            <FormGroup controlId="textbox1" >
              <ControlLabel>Input1:</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup controlId="textbox2" >
              <ControlLabel>Input2:</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    </Panel>
  </Form>

export default CustomForm;
