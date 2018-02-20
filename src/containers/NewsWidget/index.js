import React, { Component } from 'react';
import { newsDataRequest } from '../../api/index.js';
import Dropdown from '../../components/Dropdown/index.js';
import Button from '../../components/Button/index.js';
import NewsItem from '../../components/NewsItem/index.js';

const options = [
  'one', 'two', 'three'
];

class NewsWidget extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentFilter: 'none',
      data: {
        newsItems: [],
        loading: true,
        error: false,
        sources: [],
      }
    }
  }

  componentDidMount() {
    // const rawData = newsDataRequest();
    // this.state.data
  }

  onChange (option) {
    this.setState({ source: option })
  }

  render () {
    if (this.state.data && this.state.data.loading) return <p> 'Loading' </p>;
    if (this.state.data && this.state.data.error) return <p> 'Error' </p>;
    return (
      <div className='NewsWidget'>
        <h3> 'News' </h3>
        <Dropdown
          options={ options }
          onSelect={ this.onChange }
          placeholder='Filter By Source'
          value={ this.state.source }
        />
        { this.state.data.newsItems.map(newsItem => <NewsItem {...newsItem} />)}
        <Button text={ 'Show More'} onClick={ () => console.log('Button Pressed')} />
      </div>
    )
  }
}

export default NewsWidget
