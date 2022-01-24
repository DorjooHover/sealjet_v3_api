import axios from 'axios'

const url = 'http://localhost:5000/'

export const fetchNews = () => axios.get(`${url}news`)
export const createNews = (newPost) => axios.post(`${url}news`, newPost)
export const deleteNews = (id) => axios.delete(`${url}news/${id}`)