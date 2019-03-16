import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ContentView = ({ title, detail }) => {
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
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={12} md={4} lg={3}>
        <Card>
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
    </Row>
  );
}

export default ContentView;
