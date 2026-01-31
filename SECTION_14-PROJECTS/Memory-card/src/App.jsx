import React from 'react'
import GameHeader from './components/GameHeader'
import Grid from './components/Grid'


  


const App = () => {

  return (
    <>

    <div className="screen w-dvw h-dvh bg-black">
    
    <GameHeader score={3}  moves={2} />
    <Grid/>

    </div>
    
    </>
  )
}

export default App