import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'


const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getAcomps = () => api.get<SnackData[]>('/acomps')
export const getCombos = () => api.get<SnackData[]>('/combos')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getIceCreams = () => api.get<SnackData[]>('/ice-creams')

export default api
 