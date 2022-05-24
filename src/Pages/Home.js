import React from 'react'
import games from '../games'
import './Home.css'
import GameCard from '../Components/Cards/GamePicCard'
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <form className="teamForm">
          <fieldset className="teamFieldset">
            <h3>POKEMON TEAM BUILDER</h3>
            
            <div className='cardList'>
                {games.map(game => (
                  <GameCard gen={game.game.gen} key={game.game.name} picture={game.game.pic} name={game.game.name}/>
                ))}
            </div>
            
        </fieldset>
      </form>
    </div>
  )
}


export default Home
