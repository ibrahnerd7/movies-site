import React from 'react';
import {Trending, TagLine} from './components';
import {Container} from 'reactstrap';

const Home=()=>{
    return(
        <Container style={{marginLeft:0,marginRight:0,padding:0}}>
            <TagLine />
            <br />
            <Trending />
        </Container>
    )
}

export default Home;