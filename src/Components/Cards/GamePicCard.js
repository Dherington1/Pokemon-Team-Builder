import React from 'react'
import { Link } from 'react-router-dom';

const GamePicCard = ({picture, name, gen}) => {
  return (
    <div>
      <div className="holder">
        <Link key={gen} to={`/Gen${gen}`}>
          <img src={picture} alt={name} />
        </Link>
      </div>
    </div>
  )
}

export default GamePicCard