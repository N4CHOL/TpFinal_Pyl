import { Fragment, useEffect,useState } from 'react'
import { Collapse, Button, Col } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import * as noteServer from "../../Utilities/Services/ApiCall"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Note.css"
import authService from '../../Utilities/Services/auth.service';

function FormNote() {
  //  Icono
  library.add(faPenToSquare,faTrash);
  const user = authService.getCurrentUser()

  const [note, setNote] = useState({})
  const [state, setState] = useState(false);

  const toggleMoreInfo = () => {
    setState(prevState => !prevState);
  };

  function handleClick(id) {
    setState(prevState => ({ ...prevState, [id]: !prevState[id] }))
  }


  var responce
  
  const GetNotes = async () => {
   
    try {
      responce = await noteServer.GetNote(user.id);
      setNote(responce.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    GetNotes();
  }, []);

  

  const navigate = useNavigate()
  return (
    <>
      <h1 className='title'>Listado de Notas</h1>

      {Array.from(note).map((nota, index) => {
      
        return (

       
          <Fragment key={index}>
              {user.id == nota.user && <>
            <div className='center'><button className="button" onClick={(e) => handleClick(index)}> <h1 key={index} >{nota?.title}</h1></button></div>



            <Collapse in={state[index]}>
              
             
              <div className='div' key={index}>
              <div className='col'>
              <textarea className='texdisplay' value={nota?.description} readOnly></textarea>
              <span className='spanshow'>Fecha Limite:</span>
              <span className='dateshow'>{nota.CLOSING_DATE}</span>
              {nota.state == "En Proceso" && <><span className='state1'>En Proceso</span></>}
              {nota.state == "Pendiente" && <><span className='state2'>Pendiente</span></>}
              {nota.state == "Finalizado" && <><span className='state3'>Finalizada</span></>}

              </div>
              <div className='col'>
              <button className='boton' color='info' onClick={(e => navigate(`/app/edit-notes/${nota?.id}`))}>
                  <FontAwesomeIcon
                  className=''
                    icon="fa-solid fa-pen-to-square"
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "white")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                  </button>
                <button className='boton' onClick={(e) => noteServer.DelNote(nota?.id)}>
                <FontAwesomeIcon
                  className=''
                    icon="fa-solid fa-trash"
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "white")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                   </button>
              </div>
               
              </div>

            </Collapse>
               </>
              }
        
          </Fragment>
          
        )
     


      })}
      <h1 className='title'>{note.title}</h1>
    </>
  )
}

export default FormNote