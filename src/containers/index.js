import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {DebounceInput} from 'react-debounce-input';
import {fetchAllFish} from '../redux/actions';
import FishCard from '../components/fishCard';

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
          <h3>All Catfish</h3>
          {this.props.catfish.all.map(fish => {
            return (
              <FishCard {...fish} />
            )
          })}
        </div>
        <div className='col-md-4'>
          {/*LISTS TOP FIVE FISH BY ANGLER*/}
          <h3>Catfish by Angler</h3>
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
              <p>Type an angler's name above</p>
            ) : (
              <Fragment>
                <h3>{this.state.anglerSearch}'s Top 5 fish</h3>
                {this.state.currentAngler.slice(0, 5).map(fish => {
                  return (
                    <FishCard {...fish} />
                  );
                })}
              </Fragment>
            )}
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
