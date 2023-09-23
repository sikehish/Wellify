import React, { useEffect, useState } from 'react'
import { useAuth } from './contexts/AuthContext.jsx'
import LandingPage from './components/LandingPage.jsx'

function Home() {
  const { checkProfessional, currentUser } = useAuth()
  const [isProfessional, setIsProfessional] = useState(false)
  useEffect(() => {
    async function checkcheck() {
      let check = await checkProfessional(currentUser?.uid)
      if (check) {
        setIsProfessional(true)
      } else {
        setIsProfessional(false)
        console.log(currentUser)
      }
    }
    if (currentUser) {
      checkcheck()
    }
  },[currentUser])

  return (
    <div>
      {/* {isProfessional ? <p>isProfessional</p>: <p>Not a professional</p>} */}
      {!currentUser && <LandingPage />}
    </div>
  )
}

export default Home