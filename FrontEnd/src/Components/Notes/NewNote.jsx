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
function NewNote() {


  // CommonJS
  const navigate = useNavigate()

  library.add(faCircleArrowLeft);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")



  const enviar = async () => {
    if (title != "" && description != "") {
      await PostNote({ title: title, description: description })
        .then(r => {
          SuccessToast("Nota Editada Correctamente")
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

  return (
    <>
      <h1 className='title'>Cargar Nueva Nota</h1>

      <div className='form'>
        <Col>
          <span className='spantitle'>Titulo</span>
          <input className='input' onChange={(e) => setTitle(e.target.value)} value={title} />
          <span className='spantitle'>Descripcion</span>
          <textarea className='textarea' onChange={(e) => setDescription(e.target.value)} value={description} />
        </Col>

        <button className='sendBtn' onClick={(e) => enviar(e)}>Enviar</button>
      </div>

    </>
  )
}

export default NewNote