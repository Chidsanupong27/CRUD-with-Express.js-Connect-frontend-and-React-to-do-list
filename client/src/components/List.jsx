import axios from 'axios'
import React, { useState } from 'react'
import { removeData,updateDate} from '../api/todo'


const List = ({item,handleGetData}) => {

  const [isEdit,setIsEdit] = useState(false)
const [title,setTitle] = useState(item.title)
   
    const handleDelete = async (id) =>{
        removeData(id)
      .then((res)=>{
            console.log(res)
            handleGetData()
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }


    const handleEdit = (id) => {
      setIsEdit(!isEdit)
    }

    const handleOnChange = (e) => {
      setTitle(e.target.value)
    }
  return (
    <div>
      {
        isEdit 
        ? <input type="text" 
        onChange={handleOnChange}
        value={title} />
        : <span>{item.title}</span>
      }
      

      {
        isEdit
        ? "T"
        : "F"
      }
      <button>Confirm</button>
    <button onClick={()=>handleEdit(item.id)}>Edit</button> 
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
    </div>
  )
}

export default List