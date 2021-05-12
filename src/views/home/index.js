import React from 'react';
import {Trending, TagLine, Popular} from './components';
import {Container} from 'reactstrap';

const Home=()=>{
    return(
        <Container style={{backgroundColor:"#24282d",paddingBottom:12}}  fluid>
            <TagLine />
            <br />
            <Trending />
            <br />
            <Popular />
        </Container>
    )
}

export default Home;