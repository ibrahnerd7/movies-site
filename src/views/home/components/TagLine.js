import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const TagLine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory()

  return (
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + 'img/background_header.jpg'})`,
      backgroundRepeat: 'no-repeat',
      paddingTop: 116,
      paddingBottom: 76,
      paddingLeft: 24,
      paddingRight: 24
    }}>
      <h1 className="text-white">Welcome .</h1>
      <h5 className="text-white">Millions of movies, TV shows and people to discover. Explore now.</h5>
      <br />
      <br />
      <InputGroup >
        <Input value={searchTerm} placeholder="Search for a movie, TV show , person ..." onChange={(event) => setSearchTerm(event.target.value)} />
        <InputGroupAddon addonType="append">
          <Button color="success" onClick={() => history.push(`/search?query=${searchTerm}`)} >Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default TagLine;