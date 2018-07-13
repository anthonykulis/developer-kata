import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllFish} from '../redux/actions';
import AnglerSearch from '../containers/anglerSearch';
import SpeciesSearch from '../containers/speciesSearch';
import Column from '../components/column';
import Row from '../components/row';
import AllFishList from '../components/allFish';

class Index extends Component {
  componentWillMount() {
    this.props.fetchAllFish();
  }

  render() {
    return (
      <Row>
        <AllFishList catfish={this.props.catfish.all} />
        <AnglerSearch />
        <Column className='col-md-4'>
          <Row>
            <SpeciesSearch />
          </Row>
        </Column>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    catfish: state.catfish
  }
}

function mapDispatchToProps(dispatch) {
  return({
    fetchAllFish: () => {
      dispatch(fetchAllFish());
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
