import React from 'react';
import { StyleSheet, css} from 'aphrodite/no-important';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardResultView = ({ id, race, name, flavour, positive, negative, medical }) => (
  <Col xs={12} sm={6} md={6} lg={4} xl={3}>
    <Card className={css(styles.normal, styles.medium)}>
      <Card.Header>{race}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Flavours: <br/>
          <span className="text-muted">{flavour}</span>
        </Card.Text>
        <Card.Text>
          Positive effect: <br/>
          <span className="text-muted">{positive}</span>
        </Card.Text>
        <Card.Text>
          Negative effect: <br/>
          <span className="text-muted">{negative}</span>
        </Card.Text>
        <Card.Text>
          Medical effect: <br/>
          <span className="text-muted">{medical}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

// THE CSS PART
const styles = StyleSheet.create({
  normal: {
    margin: '20px 0 20px 0'
  },
  medium: {
    '@media (min-width: 768px)': {
      margin: '0 0 40px 0'
    }
  }
});

export default CardResultView;
