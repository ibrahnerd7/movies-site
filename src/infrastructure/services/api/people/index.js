import axios from 'axios';
import { buildUrl } from '../constants';

const getPeopleByType= async (peopleType) => {
    try{
        const response = await axios.get(buildUrl(`person/${peopleType}`));
        return response.data.results;
    }
    catch(error){
        console.log(error.message)
    }
}

export {getPeopleByType}