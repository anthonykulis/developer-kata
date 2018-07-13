import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {DebounceInput} from 'react-debounce-input';
import {fetchAllFish} from '../redux/actions';

class Index extends Component {
  constructor() {
    super();

    this.state = {
      anglerSearch: '',
      currentAngler: []
    }
  }

  componentWillMount() {
    this.props.fetchAllFish();
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-4'>
          {/*LISTS ALL FISH*/}
          {this.props.catfish.all.slice(0, 10).map(fish => {
            return (
              <div key={fish.id}>
                <p>
                  Angler: {fish.angler}
                </p>
                <p>
                  Species: {fish.species}
                </p>
                <p>
                  Length: {fish.length}
                </p>
                <p>
                  Girth: {fish.girth}
                </p>
              </div>
            )
          })}
        </div>
        <div className='col-md-4'>
          {/*LISTS TOP FIVE FISH BY ANGLER*/}
          <DebounceInput
            minLength={2}
            debounceTimeout={500}
            value={this.state.anglerSearch}
            onChange={event => {
              const currentAngler = this.props.catfish.all.filter(fish =>
                fish.angler.toLowerCase() === event.target.value.toLowerCase()
              ).sort((a, b) => {
                return b.length - a.length;
              });
              this.setState({
                anglerSearch: event.target.value,
                currentAngler
              })
            }}
          />
            {this.state.currentAngler.length < 1 ? (
              <p>Type a valid angler above</p>
            ) : (
              <Fragment>
                <h3>{this.state.anglerSearch}'s Top 5 fish</h3>
                {this.state.currentAngler.slice(0, 5).map(fish => {
                  return (
                    <div key={fish.id} className='fish-box'>
                      <p>
                        Species: {fish.species}
                      </p>
                      <p>
                        Length: {fish.length}
                      </p>
                      <p>
                        Girth: {fish.girth}
                      </p>
                    </div>
                  );
                })}
              </Fragment>
            )}
        </div>
        <div className='col-md-4'>
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
