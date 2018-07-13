import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllFish} from '../redux/actions';
import AnglerSearch from '../containers/anglerSearch';
import SpeciesSearch from '../containers/speciesSearch';

class Index extends Component {
  componentWillMount() {
    this.props.fetchAllFish();
  }

  render() {
    return (
      <div className='row'>
        <AnglerSearch />
        <div className='col-md-4'>
          <div className='row'>
            <SpeciesSearch />
          </div>
        </div>
      </div>
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
