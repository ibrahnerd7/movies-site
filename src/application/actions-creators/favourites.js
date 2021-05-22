import {
    FAVOURITES
} from "../constants";

export const requestFavourites = (userId) => ({
    type: FAVOURITES.LOAD,
    userId,
});

export const requestFavouritesSuccess = favourites => ({
    type: FAVOURITES.LOAD_SUCCESS,
    favourites,
});

export const requestFavouritesError = () => ({
    type: FAVOURITES.LOAD_FAIL,
});
