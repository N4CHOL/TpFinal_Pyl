

const API_URL = "http://localhost:8000/user/user/";

const login = async (username, password) => {

    const response = await axios

        .post(API_URL + "/auth/login", {
            username,
            password
        });


    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));

    }
    ;
    console.log(response)
    return response.data;
    

}


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};



const logout = () => {


    localStorage.removeItem("user")
    console.log("logout")
    window.location.reload()

};




const authService = {
    login,
    getCurrentUser,
    logout
};



export default authService;