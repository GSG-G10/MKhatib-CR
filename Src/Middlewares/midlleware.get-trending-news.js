require('dotenv').config();

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
  params: { safeSearch: 'Off', textFormat: 'Raw' },
  headers: {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY,
  },
};
module.exports = (req, res) => {
  axios.request('https://bing-news-search1.p.rapidapi.com/news/trendingtopics', options)
    .then((response) => res.json(response.data.value.splice(0, 4)))
    .then(() => console.log(options))
    .catch((error) => res.json(error));
};
