"use client"
import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
  const userNameRef: any = useRef(null);
  const prevously_searched_text: any = useRef(null)
  const handlePrintUserName = () => {
    console.log(userNameRef.current.value)
  }
  const [search_text, set_search_text] = useState("");
  useEffect(() => {
    prevously_searched_text.current = search_text
  }, [search_text])
  return (
    <div>
      <p>useRef for storing and tracking previous values</p>
      <input type='text' ref={userNameRef} />
      <div>{prevously_searched_text.current}</div>
      <input type='text' value={search_text} onChange={(event: any) => set_search_text(event.target.value)} />
      <button onClick={handlePrintUserName} >Print User Name</button>
    </div>
  )
}

export default UseRef
