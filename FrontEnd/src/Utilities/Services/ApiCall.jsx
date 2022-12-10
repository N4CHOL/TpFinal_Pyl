import axios from "axios"
const GET = `http://localhost:8000/note/note-list`



export const notegetter = async () => {
    return await fetch(GET)
}




 export const GetNote = async () => {
     return await axios.get(`${GET}`, {
         headers: {
             'authorization': ' xxxxxxxxxx',
            

         }
     }

     ).then(response => {
        
         return response
     });
 };

