import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, Container, CardGroup } from 'reactstrap';
import { getMoviesByTerm } from '../../infrastructure/services/api/movies';

const Movie=({movieItem})=>{
    return(
        <Col md="2" xs="6">
        <Card className="">
            <CardImg top src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movieItem.poster_path}`} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{movieItem.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{new Date(movieItem.release_date).toLocaleDateString()}</CardSubtitle>
            </CardBody>
        </Card>
        </Col>
    )
}

const Movies = () => {
    const { term } = useParams();
    const [movies, setMovies] = useState([]);

    const fetchMoviesByTerm = async (movieTerm) => {
      const normalizedMovieTerm =movieTerm.replace('-',"_")
        try {
            const fetchedMovies = await getMoviesByTerm(normalizedMovieTerm);
            setMovies(fetchedMovies);
        }
        catch (error) {

        }
    }

    useEffect(() => {
        fetchMoviesByTerm(term)
    }, [term])

    return (
        <Container>
            <h1 className="mt-4 mb-4">{`${term} Movies`}</h1>
            <Row className="flex-row">
            <CardGroup>
                {
                    movies.map((movie) => (
                     <Movie movieItem={movie} />
                    ))
                }
                </CardGroup>
            </Row>
        </Container>
    )
}

export default Movies;