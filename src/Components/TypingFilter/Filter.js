import React from 'react'
import typing from './types'
import './filter.css'

function Filter({handleClick}) {
  return (
    <div className='typing'>
      {typing.map(element => (
        <img className='typingCard' src={element.pokemontype.pic} onClick={handleClick} alt="typingOption" id={element.pokemontype.num} key={element.pokemontype.num}/>
      ))}
    </div>
  )
}

export default Filter