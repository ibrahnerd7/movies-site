import { firestore } from './config'

//Store a favourite
export const addFavourite = async (userId, favourite) => {
    try {
        const ref =  firestore.collection(`users/${userId}/favourites/${favourite.type}/${favourite.id}`);
        const res=await ref.add(favourite);
        return res
    } catch (error) {
        return error
    }
}

//retrieve favourites by type (eg movies, people or TV Shows)
