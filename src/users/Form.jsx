import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Form({data, setData, onSubmit}) {
    const {userId} = useParams();
    const navigate = useNavigate()
    return (
        <form onSubmit={onSubmit} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
            <div className="mb-3">
                <label className="form-label">نام و نام خانوادگی</label>
                <input type="text" className="form-control" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            </div>
            <div className="mb-3">
                <label className="form-label">نام کاربری</label>
                <input type="text" className="form-control" value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
            </div>
            <div className="mb-3">
                <label className="form-label">ایمیل</label>
                <input type="email" className="form-control" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
            <div className="mb-3 row">
                <label className="form-label">آدرس</label>
                <div className="col-6 my-1">
                    <input type="text" className="form-control" placeholder="شهر" value={data.address.city} onChange={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })} />
                </div>
                <div className="col-6 my-1">
                    <input type="text" className="form-control" placeholder="خیابان" value={data.address.street} onChange={(e) => setData({ ...data, address: { ...data.address, street: e.target.value } })} />
                </div>
                <div className="col-6 my-1">
                    <input type="text" className="form-control" placeholder="ادامه آدرس" value={data.address.suite} onChange={(e) => setData({ ...data, address: { ...data.address, suite: e.target.value } })} />
                </div>
                <div className="col-6 my-1">
                    <input type="text" className="form-control" placeholder="کد پستی" value={data.address.zipcode} onChange={(e) => setData({ ...data, address: { ...data.address, zipcode: e.target.value } })} />
                </div>
            </div>

            <div className="col-12 text-start">
                <button type="button" className="btn btn-danger ms-2" onClick={() => navigate(-1)}>بازگشت</button>
                <button type="submit" className="btn btn-primary" >
                    {userId ? "ویرایش " : "افزودن "}
                </button>
            </div>
        </form>
       
    )
}
