import React from 'react'
import { Link } from 'react-router-dom';

const GamePicCard = ({picture, name, gen}) => {
  return (
    <div className="holder">
      <Link key={gen} to={`/Gen${gen}`}>
        <img src={picture} alt={name} />
      </Link>
    </div>
  )
}

export default GamePicCard