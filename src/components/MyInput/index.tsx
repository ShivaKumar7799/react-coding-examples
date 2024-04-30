import { AnySoaRecord } from 'dns'
import React, { forwardRef } from 'react'

function MyInput(props: any, ref: any) {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  )
}

export default forwardRef(MyInput)
