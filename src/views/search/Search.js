import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
    Container, CardText, Card,
    CardBody, Col
} from 'reactstrap';
import { requestSearch } from '../../application/actions-creators/search';
import './style.css'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}


const SearchResultsCard = ({item}) => {
    return (<Card className={"flex-1 flex-row mt-2 mb-2"}>
        <img width="9%" height="116" alt="item.original_name" src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} />
        <CardBody>
            <h6>{item.original_name || item.original_title}</h6>
            <CardText className={"text"} >{item.overview}</CardText>
        </CardBody>
    </Card>)
}

const Search = () => {
    let query = useQuery();
    const searchTerm = useState(query.get("query"));
    const { results } = useSelector(state => state.search);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestSearch(searchTerm));
    }, [dispatch, searchTerm])

    return (
        <Container >
            <div>
                <h3>Results</h3>
                <Col className="flex-nowrap flex-row trending flex-1" >
                    {
                        results.map((searchResult) => <SearchResultsCard item={searchResult} key={searchResult.id} />)
                    }
                </Col>
            </div>


        </Container>
    )
}

export default Search