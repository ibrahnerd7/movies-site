import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const TagLine=()=>{
    return(
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'img/background_header.jpg'})`, 
         backgroundRepeat: 'no-repeat',
         paddingTop:116,
         paddingBottom:76
        }}>
        <h1 className="text-white">Welcome .</h1>
        <h5 className="text-white">Millions of movies, TV shows and people to discover. Explore now.</h5>
        <br />
        <InputGroup >
        <Input />
        <InputGroupAddon addonType="append">
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
    )
}

export default TagLine;