import { StyleSheet, css} from 'aphrodite/no-important';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const EmailSubscribe = () => {
  return (
    <Card className={css(styles.all, styles.card)}>
      <Card.Header>Newsletter</Card.Header>
      <Card.Body>
        <Card.Text>
          Insert your email to get update from Tania project. We will only send updates twice a month maximum. We promise!
        </Card.Text>
        <Form method='POST' action='https://formspree.io/taniboxmail@gmail.com'>
          <input type='hidden' name='campaign' value='Cannia Form' />
          <Form.Row>
            <Col xs={8} sm={8} md={12} lg={12} xl={8}>
              <Form.Control as='input' placeholder='Your email here' name='email' required={true} />
            </Col>
            <Col xs={4} sm={4} md={12} lg={12} xl={4}>
              <Button variant='primary' type='submit' className={css(styles.button)}>
                Subscribe
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

// THE CSS PART
const styles = StyleSheet.create({
  all: {
    margin: '20px 0'
  },
  button: {
    backgroundColor: '#61dd8e',
    border: '1px solid #61dd8e',
    ':hover': {
      color: '#61dd8e',
      backgroundColor: '#ffffff',
      border: '1px solid #61dd8e'
    },
    '@media (min-width: 768px)': {
      marginTop: '10px'
    },
    '@media (min-width: 992px)': {
      marginTop: '10px'
    },
    '@media (min-width: 1200px)': {
      marginTop: '0'
    }
  },
  card: {
    '@media (min-width: 768px)': {
      width: '100% !important'
    },
    '@media (min-width: 992px)': {
      marginTop: '0',
    },
    '@media (min-width: 1200px)': {
      marginTop: '0'
    }
  }
});

export default EmailSubscribe;
