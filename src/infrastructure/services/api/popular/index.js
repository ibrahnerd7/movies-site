import axios from 'axios';
import { buildUrl } from '../constants';

const getPopularByType= async (popularType) => {
        const response = await axios.get(buildUrl(`${popularType}/popular`));
        return response.data.results;
}

export {getPopularByType}