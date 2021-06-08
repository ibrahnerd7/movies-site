import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useColor } from 'color-thief-react';
import { requestMovie } from '../../application/actions-creators/movie';
import { requestReviews } from '../../application/actions-creators/reviews';
import { requestRecommendations } from '../../application/actions-creators/recommendations';
import { Col, Row, Card, CardImg, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { IoMdHeart, IoMdHeartEmpty, IoMdCreate } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import './styles.css';
import { UserContext } from '../../application/providers/UserProvider';
import { firestore } from '../../infrastructure/services/firebase';
import { checkIfIsFavourite, getReviews } from '../../infrastructure/services/firebase/database';

const Movie = () => {
    const [id, setId] = useState(useParams().id)
    const { movie } = useSelector(state => state.movie);
    const { reviews } = useSelector(state => state.reviews);
    const { recommendations } = useSelector(state => state.recommendations);
    const [movieSiteRevies,setMovieSiteReviews]=useState([]);
    const imageRef = React.forwardRef();
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useContext(UserContext);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const { data } = useColor(`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`, 'hex', { crossOrigin: "anonymous", quality: 25 })

    const fetchMovieSiteReviews=async (id)=>{
      const siteReviews=await  getReviews(id);
      setMovieSiteReviews(siteReviews);
    }

    useEffect(() => {
        dispatch(requestMovie(id));
        dispatch(requestReviews(id));
        dispatch(requestRecommendations(id));
        fetchMovieSiteReviews(id)
    }, [dispatch, id, user])

    const styles = { favButton: { width: 42, height: 42, borderRadius: 21 } }

    return (
        <Container fluid style={{ backgroundColor: "#24282d", paddingTop: 16, paddingBottom: 16, color: "#ffffff" }}>
            <Container fluid style={{ backgroundColor: `${data}` }}>
                <Container>
                    <h4 className="text-white" style={{ ...getHeadingStyles() }}>{`${movie.original_title || movie.title} (${new Date(movie.release_date).getFullYear()})`}</h4>
                    <div style={{ ...getStyles(movie) }} className="row ">
                        <Col md="3" xs="12" >
                            <Card inverse style={{ border: "none", borderRadius: 8 }}>
                                <CardImg
                                    crossOrigin={"anonymous"}
                                    ref={imageRef} style={{ borderRadius: 6 }}
                                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                                    alt="Card image cap"
                                />
                            </Card>
                        </Col>
                        <MovieDescription movie={movie} />
                    </div>
                </Container>
            </Container>
            <Container>
                <Col className="pt-5">
                    <Row className='d-flex justify-content-between'>
                        <h4 className="text-black" style={{ marginTop: 8 }}>Reviews</h4>
                        {user?.uid && <Button style={styles.favButton} color="success" onClick={toggle}>
                            <IoMdCreate />
                        </Button>}
                    </Row>
                    {movieSiteRevies.map((review) => <MovieSiteReviewsCard review={review} />)}
                    {reviews.map((review) => <ReviewsCard review={review} />)}
                </Col>
                <Col>
                    <Row>
                        <h4 className="text-black" style={{ marginTop: 32 }}>Recommendations</h4>
                    </Row>
                    <Row className="mt-4 flex-nowrap flex-row recommendations flex-1">
                        {
                            recommendations.map((recommendation) => <RecommendationsCard recommendation={recommendation} key={recommendation.id} history={history} setId={setId} />)
                        }
                    </Row>
                </Col>
            </Container>
            <AddReviewModal toggle={toggle} modal={modal} movieId={id} user={user} fetchMovieSiteReviews={(id)=>fetchMovieSiteReviews(id)}/>
        </Container>
    )
}

const AddReviewModal = (props) => {
    const {
        className,
        toggle,
        modal,
        movieId,
        user,
        fetchMovieSiteReviews,
    } = props;

    const [description, setDescription] = useState('')

    const handleSubmit = async () => {
        const review = {
            movieId,
            description,
            userId: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
            date: new Date().toISOString()
        }
        await firestore.addReview(review);
        toast.success(`Review sent. Thank you !`, { position: toast.POSITION.BOTTOM_RIGHT, hideProgressBar: true });
        toggle()
        fetchMovieSiteReviews(movieId)
    }

    return (
        <div>
            <Modal style={{ backgroundColor: "white", borderRadius: 6 }} isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add review</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="exampleText">Review Description</Label>
                        <Input type="textarea" name="text" id="exampleText" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const RecommendationsCard = ({ recommendation, history, setId }) => {
    return <Col md="2" xs="6" style={{ cursor: "pointer" }} onClick={() => {
        setId(recommendation.id)
        history.push(`/movie/${recommendation.id}`)
    }}>
        <Card inverse style={{ border: "none", borderRadius: 16, }}>
            <CardImg style={{ borderRadius: 16 }} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${recommendation.poster_path}`} alt="Card image cap" />
        </Card>
        <h6 className="text-black">{recommendation.original_title || recommendation.title}</h6>
        <p>{new Date(recommendation.release_date).toLocaleDateString()}</p>
    </Col>;
}

const ReviewsCard = ({ review }) => {
    return <Card key={review.id} className="mt-2 p-2" style={{ backgroundColor: "#24282d" }}>
        <Row>
            <img src={`${review.author_details.avatar_path}`.substring(1)} alt="Card cap" style={{ width: 76, height: 76, borderRadius: 48, marginLeft: 16, marginTop: 16 }} />
            <Col>
                <h6 className="text-nowrap text-truncate" style={{ width: "100%" }}>{review.author}</h6>
                <p className="mb-2  content">{review.content}</p>
                <p className="mb-2 text-muted">{new Date(review.created_at).toLocaleDateString()}</p>
            </Col>
        </Row>
    </Card>
}

const MovieSiteReviewsCard = ({ review }) => {
    console.log(review.photoURL)
    return <Card key={review.id} className="mt-2 p-2" style={{ backgroundColor: "#24282d" }}>
        <Row>
            <img src={review.photoURL} alt="Card cap" style={{ width: 76, height: 76, borderRadius: 48, marginLeft: 16, marginTop: 16 }} />
            <Col>
                <h6 className="text-nowrap text-truncate" style={{ width: "100%" }}>{review.username}</h6>
                <p className="mb-2  content">{review.description}</p>
                <p className="mb-2 text-muted">{new Date(review.date).toLocaleDateString()}</p>
            </Col>
        </Row>
    </Card>
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


const getStyles = () => {
    return {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: 48,
        paddingBottom: 76,
    }
}
const getHeadingStyles = () => {
    return {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: 116,
    }
}

export default Movie;