import React, { useReducer, useState } from "react";

const data = [
  { id: 1, name: "chidsanupong" },
  { id: 2, name: "top" },
];

const defaultState = {
    people:data,
    user:"top",
    login:"true",
}

const reducer = (state,action) => {
    // console.log(action.type,action.payload.id)

    if(action.type === "clear") {
        return{...state,people:[]}
    }
     if(action.type === "Reset") {
        return{...state,people:data}
    }
    if(action.type === "Remove") {
        let {id} = action.payload
        let newData = state.people.filter((el)=>el.id !== id)
        return {...state,people:newData}
    }

    return state
    
}


const BasicUseReducer2 = () => {
    
// const [data,setData] = useState(people); //state ไม่ซับซ้อน
const [state,dispatch] = useReducer(reducer, defaultState) //state ซับซ้อน

const hdlRemove = (id) => {
    dispatch({type:"Remove", payload:{id}})
}
const hdlReset = () => {
    dispatch({type:"Reset"})
}
const hdlClear = () => {
    dispatch({type:"clear"})
}

  return (
    <div>
      {state.people.map((el) => {
        return (
          <div key={el.id}>
            <h1 >{el.name}</h1>
             <button onClick={()=>hdlRemove(el.id)}>Remove User</button>
          </div>
        );
      })}
      <hr />
      <button onClick={hdlReset}>Reset</button>
      <button onClick={hdlClear}>Clear</button>
    </div>
  );
};
export default BasicUseReducer2;
   