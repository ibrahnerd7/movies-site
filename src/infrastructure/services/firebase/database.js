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

//delete a favourite
export const deleteFavourite = async (userId,favouriteId) => {
    try {
        const ref =database.ref(`users/${userId}/favourites/${favouriteId}`);
        const res= await ref.set(null);
        return res;
    } catch (error) {
        return error;
    }
}

//delete a favourite
export const checkIfIsFavourite = async (userId,favouriteId) => {
    let exists=false;
    try {
        const ref =database.ref(`users/${userId}/favourites/${favouriteId}`);
         await ref.once('value',snapshot=>{
            exists= snapshot.exists()
        });
        return exists;
    } catch (error) {
        return error;
    }
}

//Store a review
export const addReview = async (review) => {
    try {
        const ref =database.ref(`reviews/${review.movieId}/${review.userId}`);
        const res= await ref.set(review);
        return res;
    } catch (error) {
        return error;
    }
}

//retrieve reviews
export const getReviews = async (movieId) => {
    let reviews=[];
    try {
        const ref =database.ref(`reviews/${movieId}`);
        await ref.once('value',snapshot=>{
          snapshot.forEach((childSnapshot)=>{
            const reviewObject=childSnapshot.val();

            reviews.push(reviewObject);
          })
        });
        console.log(reviews)
       return reviews;
    } catch (error) {
        return error;
    }
}
