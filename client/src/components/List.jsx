import axios from 'axios'
import React, { useState } from 'react'
import { removeData,updateDate} from '../api/todo'
import { toast } from 'react-toastify'


const List = ({item,handleGetData}) => {

  const [isEdit,setIsEdit] = useState(false)
const [title,setTitle] = useState(item.title)
   
    const handleDelete = async (id) =>{
        removeData(id)
      .then((res)=>{
            console.log(res.data)
            toast.success(`Deleted ${res.data.deleted.title} $Success`)
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

    const handleConfirm = (id) =>{
      setIsEdit(!isEdit)
      console.log(id,title)
      updateDate(id,{title})
      .then((res)=>{
        console.log(res)
        toast.success(`Updated ${res.data.updated.title} Success`)
        handleGetData()
      })
      .catch((err)=>{
        console.log(err)
      })
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
        ?  <button onClick={()=>handleConfirm(item.id)}>Confirm</button>
        :  <button onClick={()=>handleEdit(item.id)}>Edit</button> 
      }


     
   
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
    </div>
  )
}

export default List