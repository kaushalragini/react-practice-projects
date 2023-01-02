//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionType"

const getShoes = (params)=>(dispatch)=>{
    dispatch({type: types.GET_SHOES_DATA_REQUEST})

    return axios
    .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes`,
        params
        )
        .then((r)=>{
            dispatch({type:types.GET_SHOES_DATA_SUCCESS,payload:r.data})
        })
        .catch((e)=>{
            dispatch({type:types.GET_SHOES_DATA_FAILURE});
        });
}
export {getShoes};
