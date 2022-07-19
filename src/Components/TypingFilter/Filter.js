import React from 'react'
import typing from './types'
import './filter.css'

function Filter({handleClick}) {
  console.log("this is typing");
  console.log(typing);

  return (
    <div className='typing'>
      {typing.map(element => (
        <img className='typingCard' src={element.pokemontype.pic} onClick={handleClick} alt="typingOption" id={element.pokemontype.num} key={element.pokemontype.type}/>
      ))}
    </div>
  )
}

export default Filter