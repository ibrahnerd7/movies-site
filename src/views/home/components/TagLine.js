import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'reactstrap';

const TagLine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory()

  const styles = {
    tagline: {
      backgroundImage: `url(https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      paddingTop: 176,
      paddingBottom: 176,
      paddingLeft: 24,
      paddingRight: 24,
    }
  }

  return (
    <div style={styles.tagline}>
      <h1 className="text-white">Welcome .</h1>
      <h5 className="text-white">Millions of movies, TV shows and people to discover. Explore now.</h5>
      <br />
      <br />
      <Button testid="btn-get-started" color="info" onClick={() => history.push(`/search?query=${searchTerm}`)} >Get started</Button>
    </div>
  )
}

export default TagLine;