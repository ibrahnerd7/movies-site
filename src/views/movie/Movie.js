import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { requestMovie } from '../../application/actions-creators/movie';
import { requestReviews } from '../../application/actions-creators/reviews';
import { requestRecommendations } from '../../application/actions-creators/recommendations';
import { Col, Row, Card, CardImg } from 'reactstrap';
import './styles.css';

const Movie = () => {
    const { id } = useParams();

    const { movie } = useSelector(state => state.movie);
    const { reviews } = useSelector(state => state.reviews);
    const { recommendations } = useSelector(state => state.recommendations);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestMovie(id));
        dispatch(requestReviews(id));
        dispatch(requestRecommendations(id));
    }, [dispatch, id])


    return (
        <main>
            <Row className="flex-1" style={{ ...getStyles(movie) }}>
                <MovieImage  movie={movie}/>
                <MovieDescription movie={movie}/>
            </Row>
            <Col>
                <h4 className="text-black" style={{ marginTop: 32 }}>Reviews</h4>
                {reviews.map((review) => <ReviewsCard review={review} />)}
            </Col>
            <Col>
                <h4 className="text-black" style={{ marginTop: 32 }}>Recommendations</h4>
                <Row className="mt-4 flex-nowrap flex-row recommendations flex-1">
                    {
                        recommendations.map((recommendation) => <RecommendationsCard recommendation={recommendation} key={recommendation.id} />)
                    }
                </Row>
            </Col>
        </main>
    )
}

const RecommendationsCard = ({ recommendation }) => {
    return <Col md="2" xs="6" style={{ cursor: "pointer" }}>
        <Card inverse>
            <CardImg src={`https://www.themoviedb.org/t/p/w440_and_h660_face${recommendation.poster_path}`} alt="Card image cap" />
        </Card>
        <h6 className="text-black">{recommendation.original_title || recommendation.title}</h6>
        <p>{new Date(recommendation.release_date).toLocaleDateString()}</p>
    </Col>;
}

const ReviewsCard = ({ review }) => {
    return <Row key={review.id} >
        <Card className="mt-2 p-2" style={{ backgroundColor: "white" }}>
            <Row>
                <img src={`${review.author_details.avatar_path}`.substring(1)} alt="Card cap" style={{ width: 76, height: 76, borderRadius: 48, marginLeft: 16, marginTop: 16 }} />
                <Col>
                    <h6 className="text-nowrap text-truncate" style={{ width: "100%" }}>{review.author}</h6>
                    <p className="mb-2  content">{review.content}</p>
                    <p className="mb-2 text-muted">{new Date(review.created_at).toLocaleDateString()}</p>
                </Col>
            </Row>
        </Card>
    </Row>
}

const MovieImage = ({movie}) => {
    return <Col md="2" xs="6" >
        <Card inverse>
            <CardImg src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt="Card image cap" />
        </Card>
    </Col>
}

const MovieDescription = ({movie}) => {
    return <Col style={{ marginTop: 16 }} className="text-white">
        <h4 >{`${movie.original_title || movie.title} (${new Date(movie.release_date).getFullYear()})`}</h4>
        <Row className="ml-1 ">
            {movie.genres && movie.genres.map((genre) => <p key={genre.id}>{genre.name} ,</p>)}
        </Row>
        <h5>Overview</h5>
        <p>{movie.overview}</p>
    </Col>
}


const getStyles=(movie)=> {
    return {
        backgroundImage: `url(${`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.backdrop_path}`})`,
        backgroundRepeat: 'no-repeat',
        paddingTop: 116,
        paddingBottom: 76,
        paddingLeft: 24,
        width: "100%",
        backgroundSize: "cover",
    }
}

export default Movie;