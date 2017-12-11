
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const CustomGrid = () =>
    <Grid>
        <Row>
            <Col md={8}><code>&lt;{'Col md={8}'} /&gt;</code></Col>
            <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code></Col>
        </Row>
        <Row>
            <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code></Col>
            <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code></Col>
            <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code></Col>
        </Row>
        <Row>
            <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
            <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        </Row>
    </Grid>;

export default CustomGrid;
