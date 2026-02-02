import React from 'react'
import TaskListNumbers from '../TaskList/TaskListNumbers'
import List from '../TaskList/List'

const EmployeeDashboard = () => {
  return (
    <>
    <div className="screen h-screen">

    <div className="header p-10 bg-[#1C1C1C] flex justify-between">

    <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Alok👋</span></h1>

    <button className='bg-red-600 text-lg text-white px-5 py-2 rounded-sm'>Logout</button>

    </div>

    <TaskListNumbers/>

    <List/>

    




    </div>
    
    </>
  )
}

export default EmployeeDashboard