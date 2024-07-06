
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import Form from './Form';
import { jpAxios } from "../JpAxios";
import style from '../style.module.css'

const AddUser = () => {

    const { userId } = useParams();
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    })

    const addUserService = async () => {
        const res = await jpAxios.post('/users', data);
        if (res) {
            console.log(res);
            swal(`${res.data.name} با موفقیت ایجاد شد`, {
                icon: "success",
                buttons: "متوجه شدم",
            });
        }
    }

    const updateUserService = async () => {
        const res = await jpAxios.put(`/users/${userId}`, data);
        if (res) {
            console.log(res);
            swal(`${res.data.name} با موفقیت ویرایش شد`, {
                icon: "success",
                buttons: "متوجه شدم",
            });
        }
    }

    const handleAddUser = (e) => {
        e.preventDefault();
        if (!userId) {
            addUserService()
        } else {
            updateUserService()
        }
    }

    useEffect(() => {
        if (userId) {
            jpAxios.get(`/users/${userId}`).then(res => {
                setData({
                    name: res.data.name,
                    username: res.data.username,
                    email: res.data.email,
                    address: {
                        street: res.data.address.street,
                        city: res.data.address.city,
                        suite: res.data.address.suite,
                        zipcode: res.data.address.zipcode
                    }
                })
            });
        }

    }, [])


    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {userId ? "ویرایش کاربر" : "افزودن کاربر"}
            </h4>
            {userId ? (<div className="row justify-content-center mt-5 ">
                {data.name ? (<Form onSubmit={handleAddUser} data={data} setData={setData} />) : (<h4 className="text-center text-info">لطفا صبر کنید...</h4>)}

            </div>) : (<div className="row justify-content-center mt-5 ">

                <Form onSubmit={handleAddUser} data={data} setData={setData} />
            </div>)}


        </div>
    )
}

export default AddUser;
