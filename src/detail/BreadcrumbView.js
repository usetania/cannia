import { StyleSheet, css} from 'aphrodite/no-important';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

const BreadcrumbView = ({ strainName }) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={8} lg={6}>
        <Nav className={css(styles.breadcrumb)}>
          <Nav.Item>
            <Nav.Link href='#/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='disabled' disabled>&raquo;</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='disabled' disabled>{strainName}</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
};

const styles = StyleSheet.create({
  breadcrumb: {
    marginBottom: '15px'
  }
});

export default BreadcrumbView;
