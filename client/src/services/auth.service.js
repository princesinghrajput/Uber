import axios from '../api/axiosInstance';

const loginUser = () =>{
    // TODO: Implement login logic
}


export const registerUser = async(payload) =>{
    // TODO: Implement register logic
    const response = await axios.post('http://localhost:5000/api/users/register', payload);
    return response.data;

}

const loginCaptain = () =>{
    // TODO: Implement login logic
}


const registerCaptain = () =>{
    // TODO: Implement register logic
}
