const fetch = require('node-fetch');

fetch('https://api.themoviedb.org/3/discover/movie?api_key=c1a32c68f363e400355e7be1a602cc66&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
  .then((res) => res.json())
  .then((data) => console.log(data));