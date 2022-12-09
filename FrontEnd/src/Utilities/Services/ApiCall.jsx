
import axios from "axios"


const GET = "http://127.0.0.1:8000/note/note-list/";


export const GetNote = async() => {
    return await axios.get(GET)
    .then(res => {
        data(res.data);
        console.log(res);

    });
};

export const GetNote2 = async () => {
    return await axios.get(`${GET}`, {
        headers: {
            'authorization': ' xxxxxxxxxx',
            

        }
    }

    ).then(res => {
        console.log(res);
        
    });
};


export const result = async() =>{ await axios.get(`${GET}`,
        { headers: { 'authorization': ' xxxxxxxxxx', } }

    )
        .then((response) => {

            data(response.data);
            console.log(response)
            return response

        })
        .catch((error) => {
            return { errors: error }
        });
    
    }