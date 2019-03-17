import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { StyleSheet, css} from 'aphrodite/no-important';
import Logo from '../static/svg/logo_long.svg';

const NavigationBar = () => (
  <Navbar bg="dark" className={css(styles.all)}>
    <Navbar.Brand href="#/">
      <img src={Logo} height={30} alt='Cannia Logo' />
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
