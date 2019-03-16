import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { StyleSheet, css} from 'aphrodite/no-important';

const NavigationBar = () => (
  <Navbar bg="light" className={css(styles.all)}>
    <Navbar.Brand href="/">
      Cannia
    </Navbar.Brand>
  </Navbar>
);

// THE CSS PART
const styles = StyleSheet.create({
  all: {
    marginBottom: '30px'
  }
});

export default NavigationBar;
