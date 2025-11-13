import React from 'react'

const ConditionBasic = () => {

    console.log(Boolean(''))
    console.log(Boolean(' '))
    console.log(Boolean(0))
    console.log(Boolean(null))
    console.log(Boolean(NaN))
    console.log(Boolean(undefined))


    // || หาค่าจริงค่าแรก 
    const user = "chidsanupong "

    //ที่เหลือเป็นจริงหมด

    //conduition 
    // if (user) {
    //   return <h1>Hello {user}</h1>
    // }else{
    //   return <h1>Please Login</h1>
    // }

  
  return (
     <div>
    {/* //     {user || 'Annonymoous'}
    //     {
    //       user && <h1> Please logout </h1>
    //     } */}

     {
        user === "ADMIN"
        ? "Welcome ADMIN"
        : user === "USER"
        ? "welcome User"
        : "Welcome Guest"
     }
    </div>
  )
}

export default ConditionBasic 