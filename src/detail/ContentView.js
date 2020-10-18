import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { StyleSheet, css} from 'aphrodite/no-important';
import EmailSubscribe from '../shared/EmailSubscribe';

const ContentView = ({ title, detail, desc }) => {
  let raceClass;
  if(detail.race === 'indica') {
    raceClass = 'bg-success';
  } else if(detail.race === 'sativa') {
    raceClass = 'bg-info';
  } else if(detail.race === 'hybrid') {
    raceClass = 'bg-danger';
  }

  return (
    <Row>
      <Col xs={12} sm={12} md={8} lg={6}>
        <Card>
          <Card.Header className={raceClass + ' text-white'}>{detail.race.toUpperCase()}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
        </Card>
        {/* Visible only on md */}
        <div className='d-none d-md-block d-lg-none'>
          <EmailSubscribe />
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={3}>
        <Card className={css(styles.normal, styles.medium)}>
          <Card.Header>Information</Card.Header>
          <Card.Body>
            <Card.Text>
              Flavours: <br/>
              <span className="text-muted">{detail.flavors.join(', ')}</span>
            </Card.Text>
            <Card.Text>
              Positive effect: <br/>
              <span className="text-muted">{detail.effects.positive.join(', ')}</span>
            </Card.Text>
            <Card.Text>
              Negative effect: <br/>
              <span className="text-muted">{detail.effects.negative.join(', ')}</span>
            </Card.Text>
            <Card.Text>
              Medical effect: <br/>
              <span className="text-muted">{detail.effects.medical.join(', ')}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* Visible only on xs */}
      <Col className='d-block d-sm-none'>
        <EmailSubscribe />
      </Col>

      {/* Visible only on sm */}
      <Col className='d-none d-sm-block d-md-none'>
        <EmailSubscribe />
      </Col>

      {/* Visible only on lg */}
      <Col className='d-none d-lg-block d-xl-none'>
        <EmailSubscribe />
      </Col>

      {/* Visible only on xl */}
      <Col className='d-none d-xl-block'>
        <EmailSubscribe />
      </Col>
    </Row>
  );
}

// THE CSS PART
const styles = StyleSheet.create({
  normal: {
    marginTop: '20px'
  },
  medium: {
    '@media (min-width: 768px)': {
      marginTop: '0'
    }
  }
});

export default ContentView;
