const API_KEY = '249f222afb1002186f4d88b2b5418b55';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;

export const getData = page => {
  try {
    return fetch(`${TREND_URL}?api_key=${API_KEY}&page=${page}`)
      .then(r => r.json())
      .then(r => r);
  } catch (error) {
    console.log(error);
  }
};
