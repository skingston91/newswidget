import React, { Component } from 'react';
import NewsWidget from './containers/NewsWidget/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NewsWidget />
      </div>
    );
  }
}

export default App;
