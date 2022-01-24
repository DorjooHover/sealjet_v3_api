import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getNews = () => async (dispatch) => {
     try {
          const { data } = await api.fetchNews()

          dispatch({ type: FETCH_ALL, payload: data })
     } catch (error) {
          console.log(error.message)
     }
}

export const createNews = (post) => async (dispatch) => {
     console.log(post)
     try {
          const { data } = await api.createNews(post)
          dispatch({ type: CREATE, payload: data })
     } catch (error) {
          console.log(error.message)
     }
}
export const deleteNews = (id) => async (dispatch) => {
     try {
          await api.deleteNews(id)

          dispatch({ type: DELETE, payload: id })
     } catch (error) {
          console.log(error.message)
     }
}