import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faHome, faList, faPlus, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  useNavigate
} from "react-router-dom";



import "../../assets/css/Sidebar/Sidebar.css"
import authService from '../../Utilities/Services/auth.service';
import { Collapse } from 'react-bootstrap';
import { useState } from 'react';

function Sidebar() {
  const [state, setState] = useState(false);
  library.add(faBars,faHome,faList,faPlus, faArrowDown);


  const navigate = useNavigate()

  const toggleMoreInfo = () => {
    setState(prevState => !prevState);
  };

  



  return (
    <>
    
      <nav className='slidable'>
      
        <nav className='nav'>
        <FontAwesomeIcon
                  className='navicon'
                    icon="fa-solid fa-bars"
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "cyan")}
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  />
        <h1>Note Taker</h1>
        <button className='item' onClick={(e => navigate("/app/index"))}>Index 
        <FontAwesomeIcon
                  className='itemnavicon'
                    icon="fa-solid fa-home"
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "cyan")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
        
        </button>
        <button className='item' onClick={(e => navigate("/app/note"))}>Listado
        <FontAwesomeIcon
                  className='itemnavicon'
                    icon="fa-solid fa-list"
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "cyan")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
        
        </button>
        <button className='item' onClick={(e => navigate("/app/create-note"))}>Nueva Nota
        <FontAwesomeIcon
                  className='itemnavicon'
                    icon="fa-solid fa-plus"
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "cyan")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
        </button>










       


        <button className='item' onClick={(e =>toggleMoreInfo())}>Opciones
        <FontAwesomeIcon
                  className='itemnavicon'
                    icon="fa-solid fa-arrow-down"
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "cyan")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
        </button>

    <Collapse in={state}>
    <div>

    <button className='itemnaviconsm' onClick={(e =>authService.deleteacount())}>borrar cuenta
      
        <FontAwesomeIcon
                  className='itemnavicon'
                    icon=""
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "cyan")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
        </button>



    <button className='itemnaviconsm' onClick={(e =>authService.logout())}>Cerrar Sesion
      
        <FontAwesomeIcon
                  className='itemnavicon'
                    icon=""
                    size="1x"
                    onMouseOver={({ target }) => (target.style.color = "cyan")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
        </button>
        </div>
    </Collapse>

        </nav>
      </nav>

    </>
  )
}

export default Sidebar

