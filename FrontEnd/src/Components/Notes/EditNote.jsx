import React from 'react'
import { useState,useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
import * as noteServer from "../../Utilities/Services/ApiCall"
import Swal from 'sweetalert2'
import "./Note.css"
import { SuccessToast } from '../../Utilities/Toast'
import authService from '../../Utilities/Services/auth.service';
function EditNote() {
  const user = authService.getCurrentUser()

  const navigate = useNavigate()
  let { id } = useParams();
  const [note, setNote] = useState({})
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [state, setState] = useState("")
  const [date, setDate] = useState("")
  var responce

   const GetNote = async () => {
     try {
       responce = await noteServer.ViewNote(id);
       setTitle(responce.data.title)
       setDescription(responce.data.description)
       setState(responce.data.state)
       setDate(responce.data.CLOSING_DATE)
    } catch (error) {
      console.log(error)
     }
   }

   console.log(note)

   useEffect(() => {
     GetNote();
   }, []);




  const enviar = async () => {
    if (title != "" && description != ""&& state != "" && date != ""){
    await noteServer.PutNote({ title: title, description: description, state: state, CLOSING_DATE: date, user: user.id },id)
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
          <span className='spancreate'>Estado</span>
          <select className='selectcreate' value={state} onChange={(e) => setState(e.target.value)} >
            <option disabled></option>
            <option>Pendiente</option>
            <option>En Proceso</option>
            <option>Finalizado</option>
          </select>
          <span className='spancreate'>Fecha Limite</span>
          <input  className='datecreate' type="date"  onChange={(e) => setDate(e.target.value)} value={date}/>
        </Col>

        <button className='sendBtn' onClick={(e) => enviar(e)}>Guardar</button>
      </div> 
    </>
  )
}

export default EditNote