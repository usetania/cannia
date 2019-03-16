import './App.scss';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from './shared/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Container fluid={true}>
          <Row>
            <Col>Hello</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
