import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => (
  <Navbar bg="light">
    <Navbar.Brand href="#home">
      {'Plant Finder'}
    </Navbar.Brand>
  </Navbar>
);

export default NavigationBar;