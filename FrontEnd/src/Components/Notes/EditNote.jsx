import React from 'react'
import { useState,useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import * as noteServer from "../../Utilities/Services/ApiCall"

import "./Note.css"
function EditNote() {



  let { id } = useParams();
  const [note, setNote] = useState({})
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  var responce

   const GetNote = async () => {
     try {
       responce = await noteServer.ViewNote(id);
       setTitle(responce.data.title)
       setDescription(responce.data.description)
    } catch (error) {
      console.log(error)
     }
   }

   console.log(note)

   useEffect(() => {
     GetNote();
   }, []);

  const enviar = async () => {
    await noteServer.PutNote({ title: title, description: description },id)
      .then(r => {

      })
   };


  return (
    <>
      
       <h1 className='title'>Cargar Nueva Nota</h1>

      <div className='form'>
        <Col>
          <span>Titulo</span>
          <input onChange={(e) => setTitle(e.target.value)} value={title}/>
          <span>Descripcion</span>
          <textarea onChange={(e) => setDescription(e.target.value)}  value={description}/>
        </Col>

        <button onClick={(e) => enviar(e)}>Enviar</button>
      </div> 
    </>
  )
}

export default EditNote