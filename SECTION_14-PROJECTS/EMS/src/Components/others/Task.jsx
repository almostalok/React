import React from 'react'

const Task = () => {
  return (
    <div>

                <form className='flex w-full flex-wrap bg-neutral-800 items-center justify-between px-4 py-5 mt-5 '>




                    <div className='w-1/2' >
                        
                         <div>
                        <h3>Task Title</h3>
                        <input className='border-2 w-120 mt-1 mb-4 rounded-md p-1.5' type="text" placeholder='Make a UI Design' />
                        </div>

                        <div>
                            <h3>Date</h3>
                            <input type="date" className='border-2 w-120 mt-1 mb-4 rounded-md p-1.5'/>

                        </div>

                        <div>


                        </div>
                        <h3>Assign to</h3>
                        <input type="text" placeholder='employee name'className='border-2 w-120 mt-1 mb-4 rounded-md p-1.5' />
                        <div>


                        </div>
                        <h3>Category</h3>
                        <input type="text" placeholder='design,dev,etc' className='border-2 w-120 mt-1 mb-4 rounded-md p-1.5' />







                    </div>

                   

                    <div className='w-1/2 h-full'>
                        <h3 >Description</h3>
                        <textarea className='w-full   border-2 rounded-md p-5' name="" id="" cols={30} rows={10}></textarea>

                         <div className='flex w-full justify-center align-center border-2 rounded-md bg-emerald-500 p-3'>
                        <button>Create Task</button>

                    </div>
                    </div>


                   


                </form>

            </div>
  )
}

export default Task