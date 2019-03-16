import React from 'react';
import { StyleSheet, css} from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardResultView = ({ id, race, name }) => {
  const className = css(
    styles.normal,
    styles.medium
  );

  let raceClass;
  if(race === 'indica') {
    raceClass = 'bg-success';
  } else if(race === 'sativa') {
    raceClass = 'bg-info';
  } else if(race === 'hybrid') {
    raceClass = 'bg-danger';
  }

  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
      <Link to={'/strain/'+id} className='text-white'>
        <Card className={className + ' ' + raceClass}>
          <Card.Body>
            <Card.Title>
              {name}
            </Card.Title>
            <Card.Subtitle className='mb2'>{race}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
};

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
