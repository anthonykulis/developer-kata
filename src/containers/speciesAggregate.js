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
        <h3>Species Aggregate</h3>
        <select
          value={this.state.selectedSpecies}
          onChange={event => {
            this.setState({
              selectedSpecies: event.target.value
            })
          }}
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
