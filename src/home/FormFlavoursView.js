import React from 'react';
import { StyleSheet, css} from 'aphrodite/no-important';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const FormFlavoursView = ({ idName, options, races, submitHandler }) => {
  const Options = options.map(item => <option key={item} value={item}>{item}</option>);
  const Races = races.map(item => <option key={item} value={item}>{item}</option>);

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group id={idName}>
        <Form.Row className={css(styles.row)}>
          <Col>
            <Form.Label>{ 'What flavour are you looking for?' }</Form.Label>
            <Form.Control as='select' id='flavour'>
              {Options}
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row className={css(styles.row)}>
          <Col>
            <Form.Label>From race</Form.Label>
            <Form.Control as='select' id='race'>
              {Races}
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row className={css(styles.row)}>
          <Col>
            <Button variant='primary' size='lg' type='submit' className={css(styles.button)}>
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  );
};

// THE CSS PART
const styles = StyleSheet.create({
  row: {
    margin: '15px 0 15px 0'
  },
  button: {
    backgroundColor: '#30cab3',
    border: '1px solid #30cab3',
    ':hover': {
      color: '#30cab3',
      backgroundColor: '#ffffff',
      border: '1px solid #30cab3'
    }
  }
});

export default FormFlavoursView;
