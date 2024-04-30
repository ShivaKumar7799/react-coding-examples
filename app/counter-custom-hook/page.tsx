"use client"
import useCounter from '@/src/hooks/useCounter'
import React from 'react'

function CounterCustomHook() {
  const counter = useCounter(0)
  const counter1 = useCounter(100);
  const counter2 = useCounter(200);
  return (
    <div>
      <div>
        counter value = {counter.count}
      </div>
      <div>
        counter 1 value = {counter1.count}
      </div>
      <div>
        counter 2 value = {counter2.count}
      </div>
    </div>
  )
}

export default CounterCustomHook
