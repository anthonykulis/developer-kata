import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchAllFish} from '../redux/actions';
import AnglerSearch from '../containers/anglerSearch';
import SpeciesSearch from '../containers/speciesSearch';
import SpeciesAverage from '../containers/speciesAverage';
import SpeciesAggregate from '../containers/speciesAggregate';

class Index extends Component {
  componentWillMount() {
    this.props.fetchAllFish();
  }

  render() {
    return (
      <Fragment>
        <AnglerSearch />
        <SpeciesSearch />
        <SpeciesAggregate />
        <SpeciesAverage />
      </Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return({
    fetchAllFish: () => {
      dispatch(fetchAllFish());
    }
  })
}

export default connect(null, mapDispatchToProps)(Index);
