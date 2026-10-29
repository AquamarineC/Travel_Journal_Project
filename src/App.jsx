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
      {...element}
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
