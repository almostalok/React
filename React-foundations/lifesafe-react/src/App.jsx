import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import EmergencyStatus from './components/EmergencyStatus'

const App = () => {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    <EmergencyStatus status="SAFE" message="NO ACTIVE ALERT"/>

    </>
  )
}

export default App