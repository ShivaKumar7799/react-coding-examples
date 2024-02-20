"use client"
import useErrorBoundary from '@/src/hooks/useErrorBoundary'
import React from 'react'

function NavBar() {
    const {handleError} = useErrorBoundary();
    const handleLogin = () => {
        handleError("login error")
    }
  return (
    <div>
      <h1>Navbar</h1>
      <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default NavBar
