import React from 'react'
import { useState,useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
import * as noteServer from "../../Utilities/Services/ApiCall"
import Swal from 'sweetalert2'
import "./Note.css"
import { SuccessToast } from '../../Utilities/Toast'

function EditNote() {


  const navigate = useNavigate()
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
    if (title != "" && description != ""){
    await noteServer.PutNote({ title: title, description: description },id)
      .then(r => {
        SuccessToast("Nota Editada Correctamente")
        setTimeout(function () {
          
          navigate("/app/note");
        }, 1000);
      })
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    }
   };


  return (
    <>
      
       <h1 className='title'>Editar Nota</h1>

      <div className='form'>
        <Col>
          <span className='spantitle'>Titulo</span>
          <input className='input' onChange={(e) => setTitle(e.target.value)} value={title}/>
          <span className='spantitle'>Descripcion</span>
          <textarea className='textarea' onChange={(e) => setDescription(e.target.value)}  value={description}/>
        </Col>

        <button className='sendBtn' onClick={(e) => enviar(e)}>Guardar</button>
      </div> 
    </>
  )
}

export default EditNote