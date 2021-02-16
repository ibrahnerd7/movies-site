import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const TagLine=()=>{
    return(
        <div>
        <h1>Welcome .</h1>
        <h5>Millions of movies, TV shows and people to discover. Explore now.</h5>
        <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
    )
}

export default TagLine;