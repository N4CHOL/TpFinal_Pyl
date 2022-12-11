import axios from "axios"
const GET = `http://localhost:8000/note/note-list`
const POST = `http://localhost:8000/note/create-note/`
const PUT = `http://localhost:8000/note/detail-note`

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



 export const PostNote = async (data) => {
    return await axios.post(`${POST}`,data, {
        headers: {
            'authorization': ' xxxxxxxxxx',
           

        }
    }

    ).then(response => {
       
        return response
    });
};


export const ViewNote = async (id) => {
    return await axios.get(`${PUT}/${id}`, {
        headers: {
            'authorization': ' xxxxxxxxxx',
           

        }
    }

    ).then(response => {
       
        return response
    });
};


export const PutNote = async (data,id) => {
    return await axios.put(`${PUT}/${id}`,data, {
        headers: {
            'authorization': ' xxxxxxxxxx',
           

        }
    }

    ).then(response => {
       
        return response
    });
};