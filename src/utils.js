export const extractSources = (data) => {
  return data.articles
    .reduce((accumulator, article) => accumulator.concat([article.source.name]), [])
    .filter((article, index, array) => {
      return array.indexOf(article) === index;
    })
};
