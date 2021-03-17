import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
    Container, CardText, Card,
   CardBody,Row
} from 'reactstrap';
import { requestSearch } from '../../application/actions-creators/search';

const useQuery=()=>{
    return new URLSearchParams(useLocation().search)
}

const SearchResultsCard=()=>{
    return ( <Card className={"flex-1 flex-row"}>
    <img width="9%" height="116" src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/qAe4MS10QyDRYpUjVr5KxQtIq7V.jpg" alt="Card image cap" />
    <CardBody>
        <h6>Mysterious Doctor Satan, The</h6>
        <CardText>CRAZED WITH THE LUST TO KILL! A power-mad maniac unleashes a lightning attack on an unsuspecting nation...And finds the Copperhead thirsting for revenge! A mad scientist named Dr. Satan plots to steal key pieces of technology to enable him to build an</CardText>
    </CardBody>
</Card>)
}

const Search = ({ }) => {
    let query=useQuery();
    const [searchTerm,setSearchTerm]=useState(query.get("query"));
    const {results,loading}=useSelector(state=>state.search);
    const dispatch=useDispatch()
  
    useEffect(()=>{
    dispatch(requestSearch(searchTerm));
    },[searchTerm])


    return (
        <Container >
           <div>
           <h3>Results</h3>
            <Row className="flex-nowrap flex-row trending flex-1" >
                    {
                    results.map((searchResult) => <SearchResultsCard item={searchResult} key={searchResult.id} />)
                }
                </Row>
        </div>
               
            
        </Container>
    )
}

export default Search