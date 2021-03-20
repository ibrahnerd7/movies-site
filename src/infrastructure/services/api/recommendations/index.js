import axios from 'axios';
import {buildUrl} from '../constants'

const getRecommendationsByMovie = async (movieId) => {
        const response = await axios.get(`${buildUrl(`movie/${movieId}/recommendations`)}`);
        return response.data.results;   
}

export {getRecommendationsByMovie}