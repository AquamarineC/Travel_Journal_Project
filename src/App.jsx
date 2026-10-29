import { useState } from 'react' 
import './App.css'
import Header from '../components/Header'
import Entry from '../components/Entry' 
import data from "../data"
 

function App() {

const entryElements = data.map((element)=>{

  return(
    <Entry 
      key={element.id} 
      src={element.img.src}
      alt={element.img.alt}
      title={element.title}
      country={element.country}   
      googleMapsLink={element.googleMapsLink}
      dates={element.dates}
      text={element.text}   
    />
  )

})


 


  return (
    <> 
      <Header />
      {entryElements}
    </>
  )
}

export default App
