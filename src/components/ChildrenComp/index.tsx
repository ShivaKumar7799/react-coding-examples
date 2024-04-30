import React from 'react'

function ChildrenComp({children, color}:any) {
  return (
    <div style={{backgroundColor: color}} >
      {children}
    </div>
  )
}

export default ChildrenComp
