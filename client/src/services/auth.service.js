import axios from 'axios';

const baseUrl = 'http://localhost:5000/api';

export const loginUser = async(payload) =>{
    // TODO: Implement login logic
    const response = await axios.post(`${baseUrl}/users/login`, payload);
    return response.data;
}

export const registerUser = async(payload) =>{
    // TODO: Implement register logic
    const response = await axios.post(`${baseUrl}/users/register`, payload);
    return response.data;

}

export const loginCaptain = (payload) =>{
    // TODO: Implement login logic

}


const registerCaptain = () =>{
    // TODO: Implement register logic
}
