const fetch = require('node-fetch')
const param = {
  headers: { Accept: 'application/json' }
};

const getRandomJoke = (term) => {
  new Promise((resolve, reject) => {
    fetch(`https://icanhazdadjoke.com/search?term=${term}`, param)
      .then(response => response.json())
      .then((json) => {
        console.log(json.results[0].joke);
        resolve();
      })
  })
}

const fetchJoke = () => {
  getRandomJoke('spider')
    .then(() => console.log('oi'));
}

fetchJoke();
