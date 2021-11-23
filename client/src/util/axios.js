import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://ai-shopping-backend.herokuapp.com/',
})

export default instance