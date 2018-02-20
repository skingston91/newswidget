export const extractSources = (data) => {
  return data.articles
    .reduce((accumulator, article) => accumulator.concat([article.source.name]), [])
    .filter((article, index, array) => {
      return array.indexOf(article) === index;
    })
};

export const extractRequiredData = (data) => {
  return data.articles
    .map(article => {
      return {
        source: article.source && article.source.name,
        title: article.title,
        url: article.url,
        date: article.publishedAt,
      }
    })
};

export const filterOnlyRequestedSources = (data, requestedSource) =>
  data.filter(article => article.source === requestedSource)
