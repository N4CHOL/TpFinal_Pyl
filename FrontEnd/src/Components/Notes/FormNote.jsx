import { useEffect } from 'react'
import { useState } from 'react'
import {Col, Container} from "react-bootstrap"
import * as noteServer from "../../Utilities/Services/ApiCall"
import "./Note.css"


function FormNote() {

  const [note, setNote] = useState({})
  var responce

  const GetNotes =  async () => {
    try {
      responce = await noteServer.GetNote(note);
      setNote(responce.data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(note)

  useEffect(() => {
    GetNotes();
  }, []);

  const data = note


  return (
    <>
   <h1 className='title'>Anotador</h1>
 
     {Array.from(note).map((nota, index) => {
      return(

        <h1 key={index} className="user">{nota?.title}</h1>
      )
      
      

        
     })}  
   <h1 className='title'>{note.title}</h1>
   </>
  )
}

export default FormNote