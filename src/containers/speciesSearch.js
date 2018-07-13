import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import FishCard from '../components/fishCard';

class Index extends Component {
  constructor() {
    super();

    this.state = {
      selectedSpecies: ''
    }
  }

  render() {
    return (
      <div className='col-md-4'>
        {/*LISTS TOP FIVE FISH BY ANGLER*/}
        <h3>Catfish by Species</h3>
        <select
          value={this.state.selectedSpecies}
          onChange={event => {
            this.setState({
              selectedSpecies: event.target.value
            })
          }}
        >
          {this.props.catfish.species.map(fish => {
            return <option>{fish}</option>
          })}
        </select>
        {this.state.selectedSpecies.length < 1 ? (
          <p>Select a species above</p>
        ) : (
          <Fragment>
            <h3>Longest {this.state.selectedSpecies} Catfish</h3>
            {this.props.catfish.all.filter(fish => {
              return fish.species === this.state.selectedSpecies;
            }).sort((a, b) => {
              return b.length - a.length;
            }).slice(0, 5)
              .map(fish => {
                return <FishCard {...fish} key={fish.id} />
              })}
          </Fragment>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    catfish: state.catfish
  }
}

export default connect(mapStateToProps)(Index);
