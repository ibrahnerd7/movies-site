import axios from 'axios';
import {buildUrl} from '../constants'

const getReviewsByMovie = async (movieId) => {
        const response = await axios.get(`${buildUrl(`movie/${movieId}/reviews`)}`);
        return response.data.results;   
}

export {getReviewsByMovie}