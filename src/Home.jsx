import React, { useEffect, useState } from 'react'
import { useAuth } from './contexts/AuthContext.jsx'

function Home() {
  const { checkProfessional, currentUser } = useAuth()
  const [isProfessional, setIsProfessional] = useState(false)
  useEffect(() => {
    if (checkProfessional(currentUser?.uid)) {
      setIsProfessional(true)
    }
  },[currentUser])

  return (
    <div>
      <p>Home</p>
      {isProfessional ? <p>isProfessional</p>: <p>Not a professional</p>}
    </div>
  )
}

export default Home