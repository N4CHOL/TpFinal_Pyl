import { useEffect } from 'react'
import { useState } from 'react'
import * as noteServer from "../../Utilities/Services/ApiCall"



function FormNote() {


  const initialState = {
    id: 0,
    title: '',
    description: '',

  }

  const [note, setNote] = useState(initialState)




  


  const GetNote = async () => {
    try {
      const res = await noteServer.GetNote();
      const data = await res.json()
      const {id, title, description} = data.note
      setNote({id, title, description})
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetNote()
  });

  console.log(note)
  return (
    <div>FormNote</div>
  )
}

export default FormNote