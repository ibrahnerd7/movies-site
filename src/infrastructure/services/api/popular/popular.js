import axios from 'axios';
import { buildUrl } from '../constants';

const getPopularByType= async (popularType) => {
    try{
        const response = await axios.get(buildUrl(`${popularType}/popular`));
        return response.data.results;
    }
    catch(error){
        console.log(error.message)
    }
}

export {getPopularByType}