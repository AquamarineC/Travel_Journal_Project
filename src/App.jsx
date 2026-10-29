import { useState } from 'react' 
import './App.css'
import Header from '../components/Header'
import Entry from '../components/Entry'
import Practice from '../components/Practice'
import Contact from '../components/Contact' 
import jokesData from '../jokesData'
import Jokes from "../components/Jokes"

import rthshhhhhhhhrht from "../image/mr-whiskerson.png"

function App() {


  const jokeElements = jokesData.map((joke) => { 
    return (
    <Jokes setup={joke.setup} punchline={joke.punchline}/>
    )
  })







  const pokemon = ["Bulbasaur","Charmander","Squirtle"]

  const showPokemon = pokemon.map((poke) => {
      return(
        `<p>${poke}</p>`
      )

  })



  console.log(showPokemon)


  return (
    <> 
      <Header />
      <Entry 
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji"
          }}
          title="Mount Fuji" 
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Practice/>
      <main>  
        {jokeElements}
      </main>
    </>
  )
}

export default App
