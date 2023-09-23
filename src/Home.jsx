import React, { useEffect, useState } from 'react'
import { useAuth } from './contexts/AuthContext.jsx'
import LandingPage from './components/LandingPage.jsx'

function Home() {
  const { checkProfessional, currentUser } = useAuth()
  const [isProfessional, setIsProfessional] = useState(false)
  useEffect(() => {
    if (currentUser!=null && checkProfessional(currentUser?.uid)) {
      setIsProfessional(true)
    }
    setIsProfessional(false)
    console.log(currentUser)
  },[currentUser])

  return (
    <div>
      <p>Home</p>
      {/* {isProfessional ? <p>isProfessional</p>: <p>Not a professional</p>} */}
      {!currentUser && <LandingPage />}
      
    </div>
  )
}

export default Home