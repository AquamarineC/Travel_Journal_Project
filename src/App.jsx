import { useState } from 'react' 
import './App.css'
import Header from '../components/Header'
import Entry from '../components/Entry'
import Contact from '../components/Contact'
import Jokes from '../components/Jokes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Header />
      <Entry />
      <Contact 
        gsrtsrhs="./images/mr-whiskerson.png"
        srthsrtrtyytytyt = "Mr. WHISkerson" 
        phoneNumbersdthshsrfhshst ="(212) 55gu5-1234"
        emailsdga= "mr.whiskaz@catnap.meow"
      />
      <Contact 
        gsrtsrhs="./images/fluffykins.png"
        srthsrtrtyytytyt = "Fluffykins"
        phoneNumbersdthshsrfhshst ="(212) 555-2345"
        emailsdga= "fluff@me.com"
      />
      <Contact 
        gsrtsrhs="./images/felix.png"
        srthsrtrtyytytyt = "Felix"
        phoneNumbersdthshsrfhshst ="(212) 555-4567"
        emailsdga= "thecat@hotmail.com"
      />
      <Contact 
        gsrtsrhs="./images/pumpkin.png"
        srthsrtrtyytytyt = "Pumpkin"
        phoneNumbersdthshsrfhshst ="(0800) CAT KING"
        emailsdga= "pumpkin@scrimba.com"
      />
    <Jokes setup="" punchline="I can't wait to see her face light up when she opens it"/>
    <Jokes setup ="How did the hacker escape the police?" punchline="He just ransomware!"/>
    <Jokes setup ="Why don't pirates travel on mountain roads?" punchline="Punchline: Scurvy."/>
    <Jokes setup ="Why do bees stay in the hive in the winter?" punchline="Swarm."/>
    <Jokes setup ="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!"/>

    </>
  )
}

export default App
