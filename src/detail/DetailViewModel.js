import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import strainJSON from '../data/strains.json';
import ContentView from './ContentView';

class DetailViewModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailData: {},
      detailName: ''
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const strainName = Object.keys(strainJSON).find(key => {
      return strainJSON[key]['id'] === parseInt(match.params.id);
    });

    this.setState({
      detailData: strainJSON[strainName],
      detailName: strainName
    });
  }

  render() {
    const { detailData, detailName } = this.state;
    const contentView = detailName === '' ? '' : <ContentView title={detailName} detail={detailData} />;

    return (
      <Container fluid={true}>
        {contentView}
      </Container>
    );
  }
}

export default DetailViewModel;
