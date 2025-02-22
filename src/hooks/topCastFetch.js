
const API_KEY = 'api_key=17725e2bc6fdf0fc90364efc161372e2';
const BASE_URL = 'https://api.themoviedb.org/3';

const FetchTopCast = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast.slice(0, 10); 
  } catch (error) {
    console.error('Error fetching cast:', error);
    return [];
  }
};

export default FetchTopCast
