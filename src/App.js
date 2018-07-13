import React from 'react';
import Catfish from './containers/index';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="root">
          <h2>Welcome to the Catfish List</h2>
            <Catfish />
        </div>
    );
  }
}

export default App;
