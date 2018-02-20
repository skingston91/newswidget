import {
    extractSources,
    extractRequiredData,
    filterOnlyRequestedSources
  } from './utils.js';

describe('extractSources', () => {
  it('returns list of all sources from data', () => {
    const result = extractSources(exampleApiData);
    const expectedResult = [
      'BBC News',
      'Sky News',
    ]
    expect(result).toEqual(expectedResult);
  })
});

describe('extractRequiredData', () => {
  it('returns list of required data for news widget', () => {
    const result = extractRequiredData(exampleApiData);
    const expectedResult = [{
        source: 'BBC News',
        title: 'Trump Jr\'s passage to India causes a stir',
        url: 'http://www.bbc.co.uk/news/world-us-canada-43135207',
        date: '2018-02-20T20:22:03Z',
      },{
        source: 'Sky News',
        title: 'Sylvester Stallone brushes off death hoax',
        url: 'http://www.bbc.co.uk/news/world-us-canada-43130898',
        date: '2018-02-20T19:07:49Z',
      }
    ]
    expect(result).toEqual(expectedResult);
  })
});

describe('filterOnlyRequestedSources', () => {
  it('returns specificly requested Sources', () => {
    const exampleArticlesData = [{
        source: 'BBC News',
        title: 'Trump Jr\'s passage to India causes a stir',
        url: 'http://www.bbc.co.uk/news/world-us-canada-43135207',
        date: '2018-02-20T20:22:03Z',
      },{
        source: 'Sky News',
        title: 'Sylvester Stallone brushes off death hoax',
        url: 'http://www.bbc.co.uk/news/world-us-canada-43130898',
        date: '2018-02-20T19:07:49Z',
      }
    ]
    const result = filterOnlyRequestedSources(exampleArticlesData, 'BBC News');
    const expectedResult = [{
        source: 'BBC News',
        title: 'Trump Jr\'s passage to India causes a stir',
        url: 'http://www.bbc.co.uk/news/world-us-canada-43135207',
        date: '2018-02-20T20:22:03Z',
      }
    ]
    expect(result).toEqual(expectedResult);
  })
});

const exampleApiData = {
"status": "ok",
"totalResults": 10,
"articles": [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Trump Jr's passage to India causes a stir",
      "description": "Why is the US president's son delivering a foreign policy-type speech in India while selling flats?",
      "url": "http://www.bbc.co.uk/news/world-us-canada-43135207",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/420F/production/_100111961_p05ytym1.jpg",
      "publishedAt": "2018-02-20T20:22:03Z"
    },
    {
     "source": {
      "id": "Sky News",
      "name": "Sky News"
    },
      "author": "Sky News",
      "title": "Sylvester Stallone brushes off death hoax",
      "description": "The actor maintains he is \"alive and well\" after a bogus online prank claimed he had died.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-43130898",
      "urlToImage": "https://ichef-1.bbci.co.uk/news/1024/branded_news/3688/production/_100106931_sylvester.jpg",
      "publishedAt": "2018-02-20T19:07:49Z"
    }
  ]
};
