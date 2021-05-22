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

//retrieve favourites
export const getFavourites = async (userId) => {
    let favourites=[];
    try {
        const ref =database.ref(`users/${userId}/favourites`);
        await ref.once('value',snapshot=>{
          snapshot.forEach((childSnapshot)=>{
            const favObject=childSnapshot.val();

            favourites.push(favObject);
          })
        });
       return favourites;
    } catch (error) {
        return error;
    }
}
