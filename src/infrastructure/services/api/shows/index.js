import axios from 'axios';
import {buildUrl} from '../constants'


const getShowsByType = async (showType) => {
        const response = await axios.get(`${buildUrl(`tv/${showType}`)}`);
        return response.data.results;   
}

export {getShowsByType}