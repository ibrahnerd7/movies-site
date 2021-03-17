import axios from 'axios';
import {buildUrl} from '../constants'


const getSearchResults = async (searchTerm) => {
        const response = await axios.get(`${buildUrl(`/search/multi`)}&query=${searchTerm}`);
        return response.data.results;   
}

export {getSearchResults}