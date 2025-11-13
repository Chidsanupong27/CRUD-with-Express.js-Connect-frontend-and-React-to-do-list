import React, { useState } from "react";

const ListBasic = (props) => {
    const {kaika} = props;
 

  // console.log(users[0])

  //.map(fn(el,index,arr))
  return <div>
    {
           kaika.map((el,i) => {
            return <h1 key={i}>{el.name}</h1>

           })

    }
        </div>;
};
export default ListBasic;
