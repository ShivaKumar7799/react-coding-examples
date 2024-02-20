import React, { useEffect, useState } from 'react'

function useErrorBoundary() {
    const [error, seterror] = useState("");
    useEffect(() => {
      if(error){
        throw new Error(error)
      }
    },[error])
    const handleError= (error:string) => {
      seterror(error)
    }
  return {handleError}
}

export default useErrorBoundary
