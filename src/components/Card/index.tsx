import useErrorBoundary from '@/src/hooks/useErrorBoundary'
import React from 'react'

function Card() {
    const {handleError} = useErrorBoundary();
    const handleClick = () => {
      handleError("card button error")
    }
  return (
    <div className='h-10 w-10' >
      simple card
      <button onClick={handleClick} >throw Error</button>
    </div>
  )
}

export default Card
