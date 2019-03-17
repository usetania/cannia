import React, { Component } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import strainJSON from '../data/strains.json';
import ContentView from './ContentView';
import BreadcrumbView from './BreadcrumbView';

class DetailViewModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailData: {},
      detailName: '',
      detailDesc: '',
    };
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

  componentDidMount() {
    const { match } = this.props;
    const strainName = Object.keys(strainJSON).find(key => {
      return strainJSON[key]['id'] === parseInt(match.params.id);
    });

    this.setState({
      detailData: strainJSON[strainName],
      detailName: strainName
    });

    // get strain description
    const url = `https://strainapi.evanbusse.com/${process.env.REACT_APP_STRAIN_API_KEY}/strains/data/desc/${match.params.id}`;
    axios.get(url).then(res => {
      if(res.data.desc !== null) {
        this.setState({ detailDesc: res.data.desc });
      } else {
        this.setState({ detailDesc: 'The description of this strain is not found.' })
      }
    });

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

  render() {
    const { detailData, detailName, detailDesc } = this.state;
    const contentView = detailName === '' ? '' : <ContentView title={detailName} detail={detailData} desc={detailDesc} />;

    return (
      <Container fluid={true}>
        <BreadcrumbView strainName={detailName} />
        {contentView}
      </Container>
    );
  }
}

export default DetailViewModel;
