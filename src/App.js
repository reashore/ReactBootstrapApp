
import React, { Component } from 'react';
import { Button, ButtonToolbar, Grid, Row, Col, Navbar, NavItem, MenuItem, NavDropdown, Nav, Panel, Jumbotron } from 'react-bootstrap';

class CustomTopMenu extends Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
  }
  
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav onSelect={this.onSelect}>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>);
  }
}

const CustomJumbotron = () =>
  <Jumbotron>
    <h1>React Bootstrap App</h1>
    <p>A simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
;


const CustomButtonBar = () =>
  <ButtonToolbar>
    <Button>Default</Button>
    <Button bsStyle="primary">Primary</Button>
    <Button bsStyle="success">Success</Button>
    <Button bsStyle="info">Info</Button>
    <Button bsStyle="warning">Warning</Button>
    <Button bsStyle="danger">Danger</Button>
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>;

const CustomGrid = () =>
  <Grid>
    <Row>
      <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
    </Row>
    <Row>
      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
      <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
    </Row>
    <Row>
      <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
    </Row>
    <Row>
      <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
      <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
    </Row>
  </Grid>;

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
