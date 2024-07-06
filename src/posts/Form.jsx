<<<<<<< HEAD
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Form({data, setData, users, onSubmit}) {
    const { postId } = useParams();
    const navigate = useNavigate()
    return (
        <form onSubmit={onSubmit} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
            <div className="mb-3">
                <label className="form-label">کاربر</label>
                <select className="form-control" value={data.userId} onChange={(e) => setData(e, "userId")}>
                    <option value="">کاربر مورد نظر را انتخاب کنید</option>
                    {users?.map(u => (
                        <option key={u.id} value={u.id}>{u.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">آی دی کاربر</label>
                <input type="text" className="form-control" value={data.userId} onChange={(e) => setData(e, "userId")} />
            </div>
            <div className="mb-3">
                <label className="form-label">عنوان</label>
                <input type="text" className="form-control" value={data.title} onChange={(e) => setData(e, "title")} />
            </div>
            <div className="mb-3">
                <label className="form-label">متن اصلی</label>
                <textarea rows={5} type="email" className="form-control" value={data.body} onChange={(e) => setData(e, "body")}></textarea>
            </div>
            <div className="col-12 text-start">
                <button type="button" className="btn btn-danger ms-2"
                    onClick={() => navigate(-1)}
                >بازگشت</button>
                <button type="submit" className="btn btn-primary" >
                    {postId ? "ویرایش " : "افزودن "}
                </button>
            </div>
        </form>
    )
}
=======
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Form({data, setData, users, onSubmit}) {
    const { postId } = useParams();
    const navigate = useNavigate()
    return (
        <form onSubmit={onSubmit} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
            <div className="mb-3">
                <label className="form-label">کاربر</label>
                <select className="form-control" value={data.userId} onChange={(e) => setData(e, "userId")}>
                    <option value="">کاربر مورد نظر را انتخاب کنید</option>
                    {users?.map(u => (
                        <option key={u.id} value={u.id}>{u.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">آی دی کاربر</label>
                <input type="text" className="form-control" value={data.userId} onChange={(e) => setData(e, "userId")} />
            </div>
            <div className="mb-3">
                <label className="form-label">عنوان</label>
                <input type="text" className="form-control" value={data.title} onChange={(e) => setData(e, "title")} />
            </div>
            <div className="mb-3">
                <label className="form-label">متن اصلی</label>
                <textarea rows={5} type="email" className="form-control" value={data.body} onChange={(e) => setData(e, "body")}></textarea>
            </div>
            <div className="col-12 text-start">
                <button type="button" className="btn btn-danger ms-2"
                    onClick={() => navigate(-1)}
                >بازگشت</button>
                <button type="submit" className="btn btn-primary" >
                    {postId ? "ویرایش " : "افزودن "}
                </button>
            </div>
        </form>
    )
}
>>>>>>> 08ad0eb5c2af2e06b86834fc3724851b11d65799
