import React from 'react';
import {Header, Popular, PopularCard, TagLine} from './components';

const Home=()=>{
    return(
        <React.Fragment>
            <Header/>
            <TagLine />
            <br />
            <Popular />
            <br />
            <PopularCard />
        </React.Fragment>
    )
}

export default Home;