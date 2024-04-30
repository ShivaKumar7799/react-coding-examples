"use client"
import React, { useState } from 'react'
import { createContext } from 'react'
import Page from './child1/page'
import Page2 from './child2/page'

export const UserContext: any = createContext(null);


function UseContext() {
  const [name, set_name] = useState("shiva kumar")
  const userContextValues = {
    name,
    set_name
  }
  return (
    <UserContext.Provider value={userContextValues} >
      <div>
        <p>useContext hook</p>
        <Page />
        <Page2 />
      </div>
    </UserContext.Provider>
  )
}

export default UseContext
