import React from 'react'
import games from '../games'
import './Home.css'
import GameCard from '../Components/Cards/GamePicCard'
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      
      <div className='cardList'>
          {games.map(game => (
            <GameCard gen={game.game.gen} key={game.game.name} picture={game.game.pic} name={game.game.name}/>
          ))}
      </div>
    </div>
  )
}


export default Home
