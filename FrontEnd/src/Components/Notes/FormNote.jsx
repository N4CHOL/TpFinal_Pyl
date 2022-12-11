import { Fragment, useEffect } from 'react'
import { useState } from 'react'
import {Collapse, Button} from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import * as noteServer from "../../Utilities/Services/ApiCall"
import "./Note.css"


function FormNote() {


  const [note, setNote] = useState({})
  const [state, setState] = useState(false);

  const toggleMoreInfo = () => {
    setState(prevState => !prevState);
  };

  function handleClick(id) {
    setState(prevState => ({ ...prevState, [id]: !prevState[id] }))
  }


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

  const navigate = useNavigate()
  return (
    <>
    <h1 className='title'>Listado de Notas</h1>
 
     {Array.from(note).map((nota, index) => {
      return(
        <Fragment key={index}>
        <div className='center'><button className="button" onClick={(e) => handleClick(index)}> <h1 key={index} >{nota?.title}</h1></button></div>
       
        

        <Collapse in={state[index]}>
        <div className='div' key={index}> <textarea className='input' value={nota?.description} readOnly></textarea> 
    
         <button className='item' onClick={(e => navigate(`/app/edit-note/${nota?.id}`))}><p className=''>Editar Nota</p>  </button>
        
        </div>

        </Collapse>
        </Fragment>
      )
      
      

        
     })}  
   <h1 className='title'>{note.title}</h1>
   </>
  )
}

export default FormNote