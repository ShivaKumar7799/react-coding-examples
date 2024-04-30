"use client"
import ChildrenComp from '@/src/components/ChildrenComp'
import React, { useState } from 'react'

function Children() {
  const [color, set_color] = useState("")
  return (
    <div>
      render children component
      <input className='border-[0.5px] border-red-300' type="text" value={color} onChange={(event: any) => set_color(event.target.value)} />
      <ChildrenComp color={color} >
        <h1>Hello</h1>
      </ChildrenComp>
      <ChildrenComp color={"red"} >
        <h1>card 2</h1>
      </ChildrenComp>
      <ChildrenComp color={"yellow"} >
        <h1>card 3</h1>
      </ChildrenComp>
    </div>
  )
}

export default Children
