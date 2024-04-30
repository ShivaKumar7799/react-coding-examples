"use client"
import MyInput from '@/src/components/MyInput';
import React, { useRef } from 'react'

function ForwardRef() {
  const inputRef: any = useRef(null);
  const handleFocusInput = () => {
    inputRef.current.focus();
  }
  const paraRef: any = useRef(null)
  return (
    <div>
      <p>Forward Ref</p>
      <MyInput ref={inputRef} />
      <button onClick={handleFocusInput} >Focus input field</button>
      <button onClick={() => paraRef.current.remove()} >Remove paragraph</button>
      <p ref={paraRef} >This is a paragrapth</p>
    </div>
  )
}

export default ForwardRef
