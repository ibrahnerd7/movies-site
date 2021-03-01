import React from 'react';
import {Trending, TagLine} from './components';
import {Container} from 'reactstrap';

const Home=()=>{
    return(
        <Container fluid>
            <TagLine />
            <br />
            <Trending />
        </Container>
    )
}

export default Home;