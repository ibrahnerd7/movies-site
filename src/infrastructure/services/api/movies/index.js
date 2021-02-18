import axios from 'axios';


const getMoviesByTerm = async (term) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${term}?api_key=d9a1f141ddec95a6af5324e99ba4c5d9`);
    return response.data.results;
}

export {getMoviesByTerm}