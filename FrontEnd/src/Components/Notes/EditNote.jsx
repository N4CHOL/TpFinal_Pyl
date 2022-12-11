import React from 'react'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { PostNote, PutNote } from '../../Utilities/Services/ApiCall'

import "./Note.css"
function EditNote() {
     let { id } = useParams();
    // const [note, setNote] = useState({})
    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")

    // const GetNote =  async () => {
    //     try {
    //       responce = await noteServer.ViewNote(id);
    //       setNote(responce.data)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }



    //   useEffect(() => {
    //     GetNote();
    //   }, []);

    // const enviar = async () => {
    //     await PutNote( { title: title, description: description })
    //         .then(r => {
            
    //         })
    // };


  return (
    <>
        <h1 className='title'>Cargar Nueva Nota</h1>

        <div className='form'> 
        <Col>
        <span>Titulo</span>
        {/* <input onChange={(e)=>setTitle(e.target.value)} /> */}
        <span>Descripcion</span>
        {/* <textarea onChange={(e)=>setDescription(e.target.value)} /> */}
        </Col>
        
        {/* <button onClick={(e)=>enviar(e)}>Enviar</button> */}
        </div>
    
    </>
  )
}

export default EditNote