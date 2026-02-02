import React from 'react'
import Header from '../others/header'
import AllTask from '../others/AllTask'
import Task from '../others/Task'

const AdminDashboard = () => {
    return (
        <div className=' w-full p-10'>

            <Header />

            <Task/>

             <AllTask/>



        </div>
    )
}

export default AdminDashboard