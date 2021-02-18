import React from 'react';
import {Header, Trending, TagLine} from './components';
import {Container} from 'reactstrap';
import { Switch } from 'react-router-dom';

const Home=()=>{
    return(
        <Container style={{marginLeft:0,marginRight:0,padding:0}}>
            <Header/>
            <TagLine />
            <br />
            <Switch></Switch>
            <Trending />
        </Container>
    )
}

export default Home;