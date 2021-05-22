import { database } from './config'

//Store a favourite
export const addFavourite = async (userId, favourite) => {
    try {
        const ref =database.ref(`users/${userId}/favourites/${favourite.id}`);
        const res= await ref.set(favourite);
        return res;
    } catch (error) {
        return error;
    }
}

//retrieve favourites by type (eg movies, people or TV Shows)
