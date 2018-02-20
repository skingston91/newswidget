import React, { Component } from 'react';
import Dropdown from './components/Dropdown/index.js';
import Button from './components/Button/index.js';
import NewsItem from './components/NewsItem/index.js';

// import NewsWidget from 'containers/NewsWidget/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button text={ 'text' } />
        <NewsItem
          title='I am the best'
          link='www.google.com'
          date='02/12/2018'
          source='CNN'
        />
      </div>
    );
  }
}

export default App;
