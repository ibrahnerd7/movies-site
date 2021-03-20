import axios from 'axios';
import { BASE_URL } from '../constants';


const getMoviesByTerm = async (term) => {
    const response = await axios.get(`${BASE_URL}/movie/${term}?api_key=d9a1f141ddec95a6af5324e99ba4c5d9`);
    return response.data.results;
}

const getMovieById = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=d9a1f141ddec95a6af5324e99ba4c5d9`);
    return response.data.results;
}

export {getMoviesByTerm, getMovieById}