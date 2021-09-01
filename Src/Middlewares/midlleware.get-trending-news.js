require('dotenv').config();

const axios = require('axios');

const API_KEY = {
  headers: {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': process.env.TRENDING_NEWS_API_KEY,
  },
};
module.exports = (req, res) => {
  axios.request('https://bing-news-search1.p.rapidapi.com/news/trendingtopics', API_KEY)
    .then((response) => res.json(response.data.value.splice(0, 4)))
    .catch((error) => res.json(error));
};
