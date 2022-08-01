import axios from 'axios'

const instance = axios.create({
  baseURL:"https://task-manager-backend-chy.herokuapp.com"
})

export default instance
