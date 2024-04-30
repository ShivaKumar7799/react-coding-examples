import React, { useEffect, useState } from 'react'

function useCounter(counterValue: number) {
  const [count, set_count] = useState(counterValue);
  useEffect(() => {
    let interval = setInterval(() => set_count((count) => count + 1), 1000)
    return () => clearInterval(interval)
  }, [])
  return {
    count
  }
}

export default useCounter
