import React from 'react'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import { PostNote } from '../../Utilities/Services/ApiCall'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import "./Note.css"
import { SuccessToast } from '../../Utilities/Toast'
import authService from '../../Utilities/Services/auth.service';
function NewNote() {


  // CommonJS
  const navigate = useNavigate()
  const user = authService.getCurrentUser()
  library.add(faCircleArrowLeft);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [state, setState] = useState("")
  const [date, setDate] = useState("")


  const enviar = async () => {
    if (title != "" && description != ""&& state != "" && date != "") {
      await PostNote({ title: title, description: description, state: state, CLOSING_DATE: date, user: user.id })
        .then(r => {
          SuccessToast("Nota Creada Correctamente")
          setTimeout(function () {
            navigate("/app/note");
          }, 1000);
        })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    }
  }
  console.log(state)
  return (
    <>
      <h1 className='title'>Cargar Nueva Nota</h1>

      <div className='form'>
        <Col>
          <span className='spantitle'>Titulo</span>
          <input className='input' onChange={(e) => setTitle(e.target.value)} value={title} />
          <span className='spantitle'>Descripcion</span>
          <textarea className='textarea' onChange={(e) => setDescription(e.target.value)} value={description} />
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
        
        <button className='sendBtn' onClick={(e) => enviar(e)}>Enviar</button>
      </div>

    </>
  )
}

export default NewNote