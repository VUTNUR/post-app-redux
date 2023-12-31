// import { type } from "@testing-library/user-event/dist/type";
import { POST_FETCHING,POST_FETCH_ERROR,POST_FETCH_SUCCESS} from "./actionTypes";
import axios from "axios";

export const postFetching=()=>{
    return{
        type:POST_FETCHING
    } 
}

export const postFetchSuccess=(data)=>{
    return{
         type:POST_FETCH_SUCCESS,
         payload:data
    }
}

export const postFetchError=(error)=>{
    return {
        type:POST_FETCH_ERROR,
        payload:error
    }
}

export function fetchPost(){
    return function(dispatch){
        dispatch(postFetching())
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then((response)=>{
            dispatch(postFetchSuccess(response.data))
        })
        .catch((err)=>{
                dispatch(postFetchError(err.message))
        })
    }
}