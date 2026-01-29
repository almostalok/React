import React from 'react'

const App = () => {
  return (
    <>
    

    <div className="screen w-dvw h-dvh bg-black lg:flex text-white  ">


    <div className="note-typer bg-amber-950 lg:w-1/2 h-dvh text-white pt-10 grid">

    <form action="submit">

      <div className="title h-10 w-150 border-2 m-10 p-1">
    <input type="text" placeholder='Title'/>
     </div>

      <div className="detail h-50 w-150 border-2 m-10 p-1">
    <input type="text" placeholder='Description...'/>
      </div>

    <button type="submit" onClick={{}} className='border-2 pl-2 pr-2 m-auto items-center ml-80 active:scale-95'>Save</button>

    </form>

    </div>


    <div className="note-displayer bg-amber-300 lg:w-1/2 h-dvh"></div>


    </div>

    
    </>

  )
}

export default App