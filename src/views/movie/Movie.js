import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {requestMovie} from '../../application/actions-creators/movie'

const Movie=()=>{
    const { id } = useParams();
    

    const { movie } = useSelector(state => state.movie);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestMovie(id));
    }, [dispatch, id])

    console.log(movie);

    return (
        <h1>Tom and Jerry</h1>
    )
}

export default Movie;