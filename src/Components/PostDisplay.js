import React,{useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
// import { postFetching, postFetchSuccess, postFetchError } from "../redux/actions/postActions";
import { fetchPost } from "../redux/actions/postActions";
import axios from "axios";

const PostDisplay=()=>{
      const obj=useSelector((state)=>state)
      const dispatch=useDispatch()
      console.log(obj);
    //   useEffect(()=>{
    //      dispatch(postFetching())
    //      axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
    //      .then((response)=>dispatch(postFetchSuccess(response.data)))
    //      .catch((err)=>dispatch(postFetchError(err.message)))
    //   },[])
    useEffect(
        () => {
            dispatch(fetchPost())
        },[]
    )
    return(
        <div>
              {
                obj.data && 
                obj.data.map((item, index) => (
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                )
                )
              }
        </div>
    )
}

export default PostDisplay;

