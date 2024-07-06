import React , {useEffect, useReducer, useState} from 'react';
import { useParams} from 'react-router';
import { jpAxios } from "../JpAxios";
import Form from './Form';
import axios from 'axios'
import swal from 'sweetalert';
import style from '../style.module.css'

const init = {
    postData:{
        userId: "" ,
        id : "",
        title : "" ,
        body : "" 
    },
    users:[]
}
 const reducer = (state , action)=>{
    switch (action.type) {
        case "changeUser":
            return {...state , users: action.payload}
        case "isUpdate":
            return {...state , postData:action.payload}
        case "setInputValue":
            return {...state , postData:{
                ...state.postData ,
                [action.propName] : action.propValue
            }}    
        default:
            return state;
    }
}


export default function AddPost (){

    const {postId} = useParams();
  

    const [data , dispatch] = useReducer(reducer , init);

  

    const addPostService = async () => {
        const res = await jpAxios.post('/posts', data.postData);
        if (res) {
            console.log(res);
            swal(`${res.data.title} با موفقیت ایجاد شد`, {
                icon: "success",
                buttons: "متوجه شدم",
            });
        }
    }

    const updatePostService = async () => {
        const res = await jpAxios.put(`/posts/${postId}`, data.postData);
        if (res) {
            console.log(res);
            swal(`${res.data.title} با موفقیت ویرایش شد`, {
                icon: "success",
                buttons: "متوجه شدم",
            });
        }
    }

    const handleAddPost = (e)=>{
        e.preventDefault();
        if (!postId) {
            addPostService()
        }else{
            updatePostService()
        }
    }

    const setInputValues = (e,propName)=>{
        dispatch({
            type:"setInputValue",
            propName:propName,
            propValue:e.target.value
        })
    }



    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            dispatch({
                type:"changeUser",
                payload:res.data
            })
        }).catch(err=>{
            console.log(err);
        })
        if (postId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res=>{
                dispatch({
                    type:"isUpdate",
                    payload:res.data
                })
            });
        }
    },[])



    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {postId ? "ویرایش پست" : "افزودن پست" }
            </h4>
            {postId ? (<div className="row justify-content-center mt-5 ">
                {data.postData.title ? (<Form onSubmit={handleAddPost} data={data.postData} setData={setInputValues} users={data.users} />) : (<h4 className="text-center text-info">لطفا صبر کنید...</h4>)}

            </div>) : (<div className="row justify-content-center mt-5 ">

                <Form onSubmit={handleAddPost} data={data.postData} setData={setInputValues} users={data.users} />
            </div>)}
        </div>
    )
}

