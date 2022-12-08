import {useState} from 'react'
import FormNote from './FormNote'



export default function NewAssets() {
    const[tag, setTag] = useState('')
    const[name, setName] = useState('')
    

    //:[{'id':model}]

    const enviar = async () => {
      await PostNew('asset',{name:name,tag:tag,location:location,purchaseDate:purchaseDate,serialNumber:serialNumber,provider:provider,model:{'id':model},machineType:{'id':machineType},color:{'id':color}})
      .then(r =>{
        SuccessToast('Activo creado correctamente')
      });
    }


  return (
    <FormNote
    name={name}
    setName = {setName}
  

  
    enviar={enviar}
    />
  )
}

