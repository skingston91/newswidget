import React, { Component } from 'react';
import { newsDataRequest } from '../../api/index.js';
import {
  extractSources,
  extractRequiredData,
  filterOnlyRequestedSources,
} from '../../utils.js';
import Dropdown from '../../components/Dropdown/index.js';
import Button from '../../components/Button/index.js';
import NewsItem from '../../components/NewsItem/index.js';

class NewsWidget extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentFilter: 'none',
      newsItems: [],
      loading: true,
      error: false,
      sources: [],
    };
  };

  componentDidMount() {
    const rawData = newsDataRequest(); // doesn't work yet

    if (!rawData || rawData.error) this.setState({ loading: false, error: true });
    if (rawData && rawData.data) this.convertData(rawData.data)
  };

  convertData(rawData) {
    const data =  {
      newsItems: extractRequiredData(rawData),
      sources: extractSources(rawData),
      loading: false,
      error: false,
    };
    this.setState({ ...data });
  }

  onChange (option) {
    this.setState({ source: option })
  }

  render () {
    if (this.state.data && this.state.data.loading) return <p> 'Loading' </p>;
    if (this.state.data && this.state.data.error) return <p> 'Error' </p>;
    let newsItems = this.state.sources;
    if (this.state.currentFilter !== 'none') {
      newsItems = filterOnlyRequestedSources(newsItems, this.state.currentFilter);
    }
    return (
      <div className='NewsWidget'>
        <h3> News </h3>
        {
          this.state.sources && this.state.sources.length > 1 &&
            <Dropdown
              options={ this.state.sources }
              onSelect={ this.onChange }
              placeholder='Filter By Source'
              value={ this.state.currentFilter }
            />
        }
        { newsItems.map(newsItem => <NewsItem {...newsItem} />)}
        <Button text='Show More' onClick={ () => console.log('Button Pressed')} />
      </div>
    )
  }
}

export default NewsWidget
