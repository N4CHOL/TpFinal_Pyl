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
        <span className='spantitle'>Titulo</span>
        <input className='input' onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <span  className='spantitle'>Descripcion</span>
        <textarea className='textarea'onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </Col>
        
        <button className='sendBtn' onClick={(e)=>enviar(e)}>Enviar</button>
        </div>
    
    </>
  )
}

export default NewNote