const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "d9a1f141ddec95a6af5324e99ba4c5d9";

const buildUrl = (urlChunk) => {
    return `${BASE_URL}/${urlChunk}?api_key=d9a1f141ddec95a6af5324e99ba4c5d9`
}

export { BASE_URL, API_KEY, buildUrl, }
