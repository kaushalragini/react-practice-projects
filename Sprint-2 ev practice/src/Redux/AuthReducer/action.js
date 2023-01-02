//Write the ActionCreator functions here
import axios from 'axios'
import * as types from './actionTypes'

const login = (payload) =>(dispatch)=>{
    dispatch({type: types.LOGIN_REQUEST});

    return axios
    .post("https://reqres.in/api/login",payload)
    .then((r)=>{
        dispatch({type: types.LOGIN_SUCCESS,payload:r.data.token})
    })
    .catch((e)=>{
        dispatch({type: types.LOGIN_FAILURE})
    })
}
export {login}