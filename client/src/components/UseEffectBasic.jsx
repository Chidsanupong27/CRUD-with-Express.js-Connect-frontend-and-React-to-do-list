import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {

    const [value, setValue] = useState(0)
 
   useEffect (() => {
    console.log("Hello")
   },[value])

   useEffect (() => {
    console.log('second')
   },[])

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1) }>Count</button>
        {console.log("hello Render")}
    </div>
  )
}

export default UseEffectBasic