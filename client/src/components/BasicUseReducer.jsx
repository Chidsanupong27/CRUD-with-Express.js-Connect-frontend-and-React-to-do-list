import React, { useState } from "react";

const people = [
  { id: 1, name: "chidsanupong" },
  { id: 2, name: "top" },
];
const BasicUseReducer = () => {
    
const [data,Setdata] = useState(people);


const hdlRemove = (id) => {
    let newData = data.filter((el)=>el.id !== id)
    Setdata(newData)
}

const hdlReset = () => {
    Setdata(people)
}

const hdlClear = () => {
    Setdata([])
}

  return (
    <div>
      {data.map((el) => {
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
export default BasicUseReducer;
   