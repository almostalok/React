import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getlocalStorage, setlocalStorage } from './Utils/localStorage'


const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin=(email,password)=>{

    if(email=='alok@gmail.com' && password=='12345'){
      setUser('admin')
      console.log(user);
      
      
    }

    else if(email=='user@gmail.com' && password=='12345'){

      setUser('employee')
      console.log(user);

       
    }

    else{
      console.alert("invalid credential");
      
    }

  }


  return (
    <>
    

    {!user ? <Login handleLogin={handleLogin}/> : "" }
    {user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    
    
    </>
  )
}

export default App