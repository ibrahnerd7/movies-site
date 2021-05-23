import React from 'react';
import './style.css'

const TagLine = () => {
  return (
    <div  className="tagline">
      <h2 data-testid="welcome-text" className="text-white" >Welcome .</h2>
      <h6 className="text-white" data-testid="tagline-text">Millions of movies, TV shows and people to discover.<br/><br /> Explore now.</h6>
    </div>
  )
}

export default TagLine;