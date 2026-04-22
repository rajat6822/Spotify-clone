import axios from 'axios'
import { dispatch } from '../store/store'
import { addError } from '../../shared/state/errorSlice'

let axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        dispatch(addError(error.messege))
    }
)