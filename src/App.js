import React from 'react';
import Catfish from './containers/index';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="root">
            Welcome to the
            <Catfish />
        </div>
    );
  }
}

export default App;
