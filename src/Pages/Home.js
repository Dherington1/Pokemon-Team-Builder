import React from 'react'
import games from '../games'
import './Home.css'
import GameCard from '../Components/Cards/GamePicCard'

function Home() {
  return (
    <div >
      {/* <h3 id='headerHome'>POKEMON TEAM BUILDER</h3> */}
      <div className='parent'>
        <img id='headerHome' src='/TitlePhotos/Pokemon-Team-Builder-Logo-55px.png' alt='logo'/>
      </div>

      <form className="cardForm">
        <fieldset className="cardFieldset">
          <div className='containerHome'>
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
