import axios from "axios"
const basePath = process.env.NODE_ENV === 'development' ? process.env.DEV_PATH : process.env.PROD_PATH
export const getUsers = () => {
    return axios.get(`${basePath}/api/users`)
    .then(({data}) => data)
}

export const getUserById = ({id}) => {
    const path = `${basePath}/api/users/${id}?`
    
    return axios.get(path)
    .then(({data}) => data)
}

export const getTasks = ({title, completed, offset, limit, userId}) => {
    let path = `${basePath}/api/tasks?`
    
    path += title ? `&title=${title}` : ""
    path += completed ? `&completed=${completed}` : ""
    path += offset ? `&offset=${offset}` : ""
    path += limit ? `&limit=${limit}` : ""
    path += userId ? `&userId=${userId}` : ""

    return axios.get(path)
    .then(({data}) => data)
}

export const getTasksByUser = ({id}) => {
    const path = `${basePath}/api/users/${id}/tasks?`
    
    return axios.get(path)
    .then(({data}) => data)
}