import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import FishCard from '../components/fishCard';

// average weight > subtract weight from average > average difference > square root of average difference

function average(array, property) {
  return array.reduce((a, b) => {
    return a + b[property];
  }, 0) / array.length
}

function diff(array, average) {
  return array.map(fish => ({...fish, diff: average - fish.weight}));
}

function standardDeviation(array) {
  return Math.sqrt(average(diff(array, average(array, 'weight')), 'diff'));
}

class Index extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);

    this.state = {
      selectedSpecies: '',
      filteredSpecies: []
    }
  }

  onChange = event => {

    this.setState({
      selectedSpecies: event.target.value,
      filteredSpecies: this.props.catfish.filter(fish => fish.species === event.target.value)
    })
  }

  render() {
    return (
      <div className='col-md-4'>
        {/*LISTS TOP FIVE FISH BY ANGLER*/}
        <h3>Species Averages</h3>
        <select
          value={this.state.selectedSpecies}
          onChange={this.onChange}
        >
          {this.props.species.map(fish => {
            return <option>{fish}</option>
          })}
        </select>
        {this.state.selectedSpecies.length < 1 ? (
          <p>Select a species above</p>
        ) : (
          <Fragment>
            <h3>{this.state.selectedSpecies} Averages</h3>
            <p>Weight: {average(this.state.filteredSpecies, 'weight')}</p>
            {average(this.state.filteredSpecies, 'length')}
            {average(this.state.filteredSpecies, 'girth')}
            {standardDeviation(this.state.filteredSpecies)}
          </Fragment>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    catfish: state.catfish.all.map(fish => {
      return {
        ...fish,
        weight: fish.length * fish.girth * fish.girth / 800
      }
    }),
    species: state.catfish.species
  }
}

export default connect(mapStateToProps)(Index);
