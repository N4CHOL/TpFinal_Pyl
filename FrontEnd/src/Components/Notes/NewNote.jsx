import React from 'react'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import { PostNote } from '../../Utilities/Services/ApiCall'

import "./Note.css"
function NewNote() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")



    const enviar = async () => {
        await PostNote( { title: title, description: description })
            .then(r => {
            
            })
    };


  return (
    <>
        <h1 className='title'>Cargar Nueva Nota</h1>

        <div className='form'> 
        <Col>
        <span>Titulo</span>
        <input onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <span>Descripcion</span>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </Col>
        
        <button onClick={(e)=>enviar(e)}>Enviar</button>
        </div>
    
    </>
  )
}

export default NewNote