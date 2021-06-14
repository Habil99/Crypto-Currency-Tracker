import axios from 'axios';

const axiosConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    auth: {
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
    }
}

function getCurrencies(convert, page) {
    const data = axios.get(
        `${axiosConfig.baseURL}/currencies/ticker?key=${axiosConfig.auth.apiKey}&convert=${convert}&per-page=15&page=${page}`)
        .catch(error => {
            if (error.response) {
                console.log(error.response.status)
                console.log(error.response.data)
                console.log(error.response.headers)
            }
        })
    return data;
}

function getCurrency(id) {
    const data = axios.get(`${axiosConfig.baseURL}/currencies/ticker?key=${axiosConfig.auth.apiKey}&ids=${id}`)
    return data;
}

export { getCurrencies, getCurrency }
