export const dataFetchHelper = searchString =>
  fetch(
    `https://www.omdbapi.com/?s=${searchString}&apikey=${process.env.REACT_APP_API_KEY}`
  ).then(response => response.json());
