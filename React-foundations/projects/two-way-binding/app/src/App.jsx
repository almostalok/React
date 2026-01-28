import React from 'react'

const App = () => {
  return (
    <>
    

    <div className="screen bg ">

    <div className="note-typer">

    <form action="submit">

      <div className="title">
    <input type="text" />
     </div>

      <div className="detail">
    <input type="text" />
      </div>

    <button type="submit">Save</button>

    </form>

    </div>


    <div className="note-displayer"></div>


    </div>

    
    </>

  )
}

export default App