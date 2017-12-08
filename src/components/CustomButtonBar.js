
import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

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

export default CustomButtonBar;
