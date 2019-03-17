import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { StyleSheet, css} from 'aphrodite/no-important';
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
import CardResultView from './CardResultView'
import EmailSubscribe from '../shared/EmailSubscribe';

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
   * Track page with Google Analytic
   *
   * @param {String} page
   */
  trackPage(page) {
    ReactGA.set({
      page
    });
    ReactGA.pageview(page);
  };

  /**
   * Load sample data on the first load
   *
   */
  componentDidMount() {
    const flavour = flavourJSON[Math.floor(Math.random()*flavourJSON.length)];

    // querying 10 random strains by its flavours
    const randomResult = Object.keys(strainJSON).filter(key => {
      return strainJSON[key]['flavors'].find( el => el === flavour);
    }).map(item => {
      let strain = {};
      strain[item] = strainJSON[item];
      return strain;
    });

    this.setState({ searchData: randomResult });

    // GA pageview tracking
    const page = this.props.location.pathname;
    this.trackPage(page);
  }

  componentWillReceiveProps(nextProps) {
    const currentPage = this.props.location.pathname;
    const nextPage = nextProps.location.pathname;

    if (currentPage !== nextPage) {
      this.trackPage(nextPage);
    }
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

    // querying strains data based on its effect and race
    const filteredResult = Object.keys(strainJSON).filter(key => {
      return strainJSON[key]['effects'][effectType].find( el => el === effect) && strainJSON[key]['race'] === race.toLowerCase();
    }).map(item => {
      let strain = {};
      strain[item] = strainJSON[item];
      return strain;
    });

    this.setState({ searchData: filteredResult });

    // GA tracking
    ReactGA.event({
      category: 'Search',
      action: 'Clicked',
      label: 'Search - Effects'
    });
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

    // querying strains data based on its flavour and race
    const filteredResult = Object.keys(strainJSON).filter(key => {
      return strainJSON[key]['flavors'].find( el => el === flavour) && strainJSON[key]['race'] === race.toLowerCase();
    }).map(item => {
      let strain = {};
      strain[item] = strainJSON[item];
      return strain;
    });

    this.setState({ searchData: filteredResult });

    // GA tracking
    ReactGA.event({
      category: 'Search',
      action: 'Clicked',
      label: 'Search - Flavours'
    });
  }

  /**
   * The JSX template starts here.
   *
   */
  render() {
    const { effectData, flavourData, racesData, searchData } = this.state;
    const cardResults = searchData.map(result => {
      const keyName = Object.keys(result)[0];

      return <CardResultView
        key={result[keyName].id}
        id={result[keyName].id}
        race={result[keyName].race}
        name={keyName}
      />
    });

    return (
      <Container fluid={true}>
        <Row>
          <Col xs={12} sm={12} md={4} lg={3}>
            <div className={css(styles.all) + ' sticky-top'}>
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
            </div>
            {/* Email newsletter only wider than sm */}
            <div className='d-none d-md-block'>
              <EmailSubscribe />
            </div>
          </Col>

          {/* Search Result */}
          <Col xs={12} sm={12} md={8} lg={9}>
            <Row>
              {cardResults}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

// THE CSS PART
const styles = StyleSheet.create({
  all: {
    backgroundColor: '#ffffff'
  }
});

export default HomeViewModel;
