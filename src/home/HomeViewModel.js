import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import effectJSON from '../data/effects.json';
import flavourJSON from '../data/flavors.json';
import raceJSON from '../data/races.json';
import strainJSON from '../data/strains.json';
import FormEffectView from './FormEffectView';
import FormFlavoursView from './FormFlavoursView';

document.title = 'Plant Finder';

class HomeViewModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      effectData: effectJSON,
      flavourData: flavourJSON,
      racesData: raceJSON,
      searchData: []
    };

    this.searchEffectBtnHandler = this.searchEffectBtnHandler.bind(this);
    this.searchFlavourBtnHandler = this.searchFlavourBtnHandler.bind(this);
  }

  /**
   * This method will filter Strain based on the effect.
   *
   * @param {Object} e is built in browser event
   */
  searchEffectBtnHandler(e) {
    e.preventDefault();

    const race = document.getElementById('race').value;
    const effects = document.getElementById('effect').value.split('-');
    const effect = effects[0];
    const effectType = effects[1];

    const filteredResult = Object.keys(strainJSON).filter(key => {
      return strainJSON[key]['effects'][effectType].find( el => el === effect) && strainJSON[key]['race'] === race.toLowerCase();
    }).map(item => {
      let strain = {};
      strain[item] = strainJSON[item];
      return strain;
    });

    console.log(filteredResult);
    this.setState({ searchData: filteredResult });
  }

  /**
   * This method will filter Strain based on the flavour.
   *
   * @param {Object} e is built in browser event
   */
  searchFlavourBtnHandler(e) {
    e.preventDefault();

    const race = document.getElementById('race').value;
    const flavour = document.getElementById('flavour').value;

    const filteredResult = Object.keys(strainJSON).filter(key => {
      return strainJSON[key]['flavors'].find( el => el === flavour) && strainJSON[key]['race'] === race.toLowerCase();
    }).map(item => {
      let strain = {};
      strain[item] = strainJSON[item];
      return strain;
    });

    this.setState({ searchData: filteredResult });
  }

  render() {
    const { effectData, flavourData, racesData, searchData } = this.state;

    return (
      <Container fluid={true}>
        <Row>
          <Col>
            {/* Tabs for the search form */}
            <Tabs defaultActiveKey='effects'>
              <Tab eventKey='effects' title='Effects'>
                <FormEffectView
                  idName='effectFrm'
                  options={effectData}
                  races={racesData}
                  submitHandler={this.searchEffectBtnHandler}
                />
              </Tab>
              <Tab eventKey='flavours' title='Flavours'>
                <FormFlavoursView
                  idName='flavourFrm'
                  options={flavourData}
                  races={racesData}
                  submitHandler={this.searchFlavourBtnHandler}
                />
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Row>
          {/* Search Results */}
        </Row>
      </Container>
    );
  }
}

export default HomeViewModel;
