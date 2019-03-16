import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const FormFlavoursView = ({ idName, options, races, submitHandler }) => {
  const Options = options.map(item => <option key={item} value={item}>{item}</option>);
  const Races = races.map(item => <option key={item} value={item}>{item}</option>);

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group id={idName}>
        <Form.Row>
          <Col>
            <Form.Label>{ 'What flavour are you looking for?' }</Form.Label>
            <Form.Control as='select' id='flavour'>
              {Options}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>From race</Form.Label>
            <Form.Control as='select' id='race'>
              {Races}
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Button variant='primary' type='submit'>
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  );
};

export default FormFlavoursView;
