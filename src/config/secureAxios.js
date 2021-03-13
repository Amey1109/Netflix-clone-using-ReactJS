import axios from 'axios'
const secureAxios = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default secureAxios