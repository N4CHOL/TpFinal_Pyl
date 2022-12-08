
import axios from "axios"


const GET = "http://127.0.0.1:8000/note/note-list";


export const GetNote = async() => {
    return await axios.get(GET)
};



export async function Get(data, dir) {
    
    var result = await axios.get(`${GET}`,
       

    )
        .then((response) => {

            data(response.data);
            return response

        })
        .catch((error) => {
            return { errors: error }
        });
    if (result.errors) {
        await ApiError(result.errors, Get, [data, dir])
    }
};

