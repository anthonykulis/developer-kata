import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchAllFish} from '../redux/actions';

class Index extends Component {

  componentWillMount() {
    this.props.fetchAllFish();
  }

  render() {
    return (
      <h1>Something</h1>
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
