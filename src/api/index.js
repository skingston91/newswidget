// Creates all api requests

const apiKey = '0510fd44b9384a0eaf8d37f7d53b154f';

export const newsDataRequest = () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${ apiKey }`
  const req = new Request(url);
  fetch(req).then((response) => response.json())
}
