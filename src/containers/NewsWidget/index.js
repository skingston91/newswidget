import React, { Component } from 'react';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import NewsItem from 'components/NewsItem';

const options = [
  'one', 'two', 'three'
];

class NewsWidget extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSource: 'all',
      data: {
        newsItems: [],
        loading: true,
        error: false,
        sources: [],
      }
    }
  }

  onSelect (option) {
    this.setState({ source: option })
  }

  render () {
    const defaultOption = this.state.selected
    if (this.state.data && this.state.data.loading) return <p> 'Loading' </p>;
    if (this.state.data && this.state.data.error) return <p> 'Error' </p>;
    return (
      <h3> 'News' </h3>
      <Dropdown
        options={ options }
        onSelect={ onChange }
        placeholder='Filter By Source'
        value={ this.state.source }
      />
      { newsItems.map(newsItem => <NewsItem {...newsItem} />)}
      <Button text={ 'Show More'} onClick={ () => console.log('Button Pressed')} />
    )
  }
}

export default FlatArrayExample
