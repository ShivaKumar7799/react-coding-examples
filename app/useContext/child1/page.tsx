import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../page'
function Page() {
  const userContextValues = useContext(UserContext)
  const name = userContextValues?.name;
  const set_name = userContextValues?.set_name;
  return (
    <div>
      {name} <br />
      <button onClick={() => set_name("shiva")} >set name to shiva</button>
    </div>
  )
}

export default Page
