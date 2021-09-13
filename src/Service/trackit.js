import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postRegister (body) {

    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);

    return promise;
}

function postLogin (body) {

    const promise = axios.post(`${BASE_URL}/auth/login`, body);

    return promise;
}

function postHabits (token, body) {    

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.post(`${BASE_URL}/habits`, body, config);

    return promise;
}

function getHabits (token) {    

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.get(`${BASE_URL}/habits`, config);

    return promise;
}

function getToday (token) {
    
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/habits/today`, config);

    return promise;
}

function deleteHabit(token, id){

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);

    return promise;
}

function releaseState(type, id, autorization){
    const promise = axios.post(`${BASE_URL}/habits/${id}/${type}`,{}, autorization);
    return promise;
}
export {
    postRegister,
    postLogin,
    postHabits,
    getHabits,
    getToday,
    deleteHabit,
    releaseState,
}