import React from 'react'

const List = () => {
  return (
    <div id='tasklist' className=' h-[40%] overflow-x-auto flex items-center justify-start  m-10  flex-nowrap gap-5'>

        <div className="h-75 shrink-0 w-75 bg-red-400 rounded-xl mx-5 p-5  ">

        <div className="flex justify-between items-center  ">
           <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">High</h3> 
        <h4 className='text-sm'>20 feb 2024</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestiae!</p>

        </div>


    </div>
  )
}

export default List