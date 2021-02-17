import axios from 'axios';

const getAllTrending = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=d9a1f141ddec95a6af5324e99ba4c5d9');
    return response.data.results;
}

export {getAllTrending}