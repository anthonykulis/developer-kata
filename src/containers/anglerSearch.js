import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {DebounceInput} from 'react-debounce-input';
import FishList from '../components/fishList';

class Index extends Component {
  constructor() {
    super();

    this.state = {
      anglerSearch: '',
      currentAngler: []
    }
  }

  render() {
    return (
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
            ).map(fish => {
              return {
                ...fish,
                weight: fish.length * fish.girth * fish.girth / 800
              }
            }).sort((a, b) => {
              return b.weight - a.weight;
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
            <FishList catfish={this.state.currentAngler.slice(0, 5)} />
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
