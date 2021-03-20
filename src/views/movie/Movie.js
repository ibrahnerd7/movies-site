import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { requestMovie } from '../../application/actions-creators/movie';
import { requestReviews } from '../../application/actions-creators/reviews';
import { Col, Row, Card, CardImg } from 'reactstrap';

const Movie = () => {
    const { id } = useParams();

    const { movie } = useSelector(state => state.movie);
    const { reviews } = useSelector(state => state.reviews);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestMovie(id));
        dispatch(requestReviews(id));
    }, [dispatch, id])
console.log(reviews)
    return (
        <main>
            <Row>
                <Col md="2" xs="6" >
                    <Card inverse>
                        <CardImg src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt="Card image cap" />
                    </Card>
                </Col>
                <Col style={{ marginTop: 16 }}>
                    <h4 className="text-black">{`${movie.original_title || movie.title} (${new Date(movie.release_date).getFullYear()})`}</h4>
                    <Row>
                        {movie.genres && movie.genres.map((genre) => <p key={genre.id}>{genre.name} ,</p>)}
                    </Row>
                    <h5>Overview</h5>
                    <p>{movie.overview}</p>
                </Col>
            </Row>
            <Col>
                    <h4 className="text-black" style={{ marginTop: 32 }}>Reviews</h4>

            </Col>
        </main>
    )
}

export default Movie;