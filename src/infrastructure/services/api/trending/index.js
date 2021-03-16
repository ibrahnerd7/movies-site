import axios from 'axios';
import {buildUrl} from '../constants'

const getAllTrending = async () => {
    const response = await axios.get(buildUrl("trending/all/week"))
    return response.data.results;
}

const getTrendingByTimeWindow = async (timeWindow="day") => {
    try{
        const response = await axios.get(buildUrl(`trending/all/${timeWindow}`));
        return response.data.results;
    }
    catch(error){
        console.log(error.message)
    }
}

export {getAllTrending,getTrendingByTimeWindow}