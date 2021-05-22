import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { requestMovie } from '../../application/actions-creators/movie';
import { requestReviews } from '../../application/actions-creators/reviews';
import { requestRecommendations } from '../../application/actions-creators/recommendations';
import { Col, Row, Card, CardImg, Button } from 'reactstrap';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import './styles.css';
import { UserContext } from '../../application/providers/UserProvider';
import { firestore } from '../../infrastructure/services/firebase';
import { checkIfIsFavourite } from '../../infrastructure/services/firebase/database';

const Movie = () => {
    const [id, setId] = useState(useParams().id)
    const { movie } = useSelector(state => state.movie);
    const { reviews } = useSelector(state => state.reviews);
    const { recommendations } = useSelector(state => state.recommendations);
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useContext(UserContext);


    useEffect(() => {
        dispatch(requestMovie(id));
        dispatch(requestReviews(id));
        dispatch(requestRecommendations(id));

    }, [dispatch, id, user])


    return (
        <main>
            <Row className="flex-1" style={{ ...getStyles(movie) }}>
                <MovieImage movie={movie} />
                <MovieDescription movie={movie} />
            </Row>
            <Col>
                <h4 className="text-black" style={{ marginTop: 32 }}>Reviews</h4>
                {reviews.map((review) => <ReviewsCard review={review} />)}
            </Col>
            <Col>
                <h4 className="text-black" style={{ marginTop: 32 }}>Recommendations</h4>
                <Row className="mt-4 flex-nowrap flex-row recommendations flex-1">
                    {
                        recommendations.map((recommendation) => <RecommendationsCard recommendation={recommendation} key={recommendation.id} history={history} setId={setId} />)
                    }
                </Row>
            </Col>
        </main>
    )
}

const RecommendationsCard = ({ recommendation, history, setId }) => {
    return <Col md="2" xs="6" style={{ cursor: "pointer" }} onClick={() => {
        setId(recommendation.id)
        history.push(`/movie/${recommendation.id}`)
    }}>
        <Card inverse style={{ border: "none", borderRadius: 16 }}>
            <CardImg style={{ borderRadius: 16 }} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${recommendation.poster_path}`} alt="Card image cap" />
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

const MovieImage = ({ movie }) => {
    return <Col md="2" xs="6" >
        <Card inverse style={{ border: "none", borderRadius: 16 }}>
            <CardImg style={{ borderRadius: 16 }} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt="Card image cap" />
        </Card>
    </Col>
}

const MovieDescription = ({ movie }) => {
    const user = useContext(UserContext);
    const [inFavourites, setInFavourites] = useState(false);

    const isInFavourites = async (userId, id) => {
        const res = await checkIfIsFavourite(userId, id)
        setInFavourites(res);
    }

    useEffect(() => {
        isInFavourites(user?.uid, movie.id)
    }, [movie.id, user?.uid])

    const styles = { favButton: { width: 42, height: 42, borderRadius: 21 } }

    return <Col style={{ marginTop: 16 }} className="d-flex flex-column text-white justify-content-between">
        <h4 >{`${movie.original_title || movie.title} (${new Date(movie.release_date).getFullYear()})`}</h4>
        <Row className="ml-1 ">
            {movie.genres && movie.genres.map((genre) => <p key={genre.id}>{genre.name} ,</p>)}
        </Row>
        <div>
            <h5>Overview</h5>
            <p>{movie.overview}</p>
        </div>
        {user && <div>
            {inFavourites ?
                <Button style={styles.favButton} color="success" onClick={() => toast.info(`${movie.title} is already in favourites`, { position: toast.POSITION.BOTTOM_RIGHT, hideProgressBar: true })}>
                    <IoMdHeart />
                </Button> :
                <Button
                    style={styles.favButton}
                    color="success"
                    onClick={() => {
                        firestore.addFavourite(user.uid, movie)
                        toast.success(`${movie.title} added to favourites`, { position: toast.POSITION.BOTTOM_RIGHT, hideProgressBar: true });
                        setInFavourites(true)
                    }}>
                    <IoMdHeartEmpty />
                </Button>
            }
        </div>
        }
        <ToastContainer />
    </Col>
}


const getStyles = (movie) => {
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