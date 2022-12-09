import { useEffect } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'
import * as noteServer from "../../Utilities/Services/ApiCall"



function FormNote() {


  const initialState = {
    id: 0,
    title: '',
    description: '',

  }

  const [note, setNote] = useState(initialState)
  var responce



  


  const GetNotes = async () => {
    try {
      responce = await noteServer.GetNote();
      
      console.log(responce)
      setNote(responce)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetNotes()
  });


  return (
    <div>FormNote</div>
  )
}

export default FormNote