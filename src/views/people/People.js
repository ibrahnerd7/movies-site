import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, Container, CardGroup } from 'reactstrap';
import {requestPeople} from '../../application/actions-creators/people'


const Person=({personItem})=>{
    return(
        <Col md="2" xs="5">
        <Card className="mt-2">
            <CardImg top src={`https://www.themoviedb.org/t/p/w440_and_h660_face${personItem.profile_path}`} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h6" className="text-nowrap text-truncate" style={{width:"100%"}}>{personItem.name}</CardTitle>
             <CardSubtitle tag="p" className="mb-2 text-muted">{personItem.known_for[0].original_title}</CardSubtitle>
                
            </CardBody>
        </Card>
        </Col>
    )
}

const People = () => {
    const { term } = useParams();
    const normalizedPeopleTerm =term.replace('-',"_")

    const { people } = useSelector(state => state.people);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestPeople(normalizedPeopleTerm));
    }, [dispatch, normalizedPeopleTerm])

    const capitalizeTitle=(term)=>(term.charAt(0).toUpperCase()+term.slice(1)).replace("-"," ")

    return (
        <Container>
            <h1 className="mt-4 mb-4">{`${capitalizeTitle(term)} People`}</h1>
            <Row className="flex-row">
            <CardGroup>
                {
                    people.map((movie) => (
                     <Person key={movie.id} personItem={movie} />
                    ))
                }
                </CardGroup>
            </Row>
        </Container>
    )
}

export default People;