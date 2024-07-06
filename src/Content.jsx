import React, { useContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import Todos from './todos/Todos';
import Users from './users/Users';
import AddUser from './users/AddUser';
import EditDesc from './users/EditDesc';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import AddPost from './posts/AddPost';
import style from './style.module.css'



const Content = () => {


    const { showMenu, setShowMenu } = useContext(MainContext)
    const [isUser, setIsUser] = useState(false);

    const handleShowMenu = (event) => {
        event.stopPropagation()
        setShowMenu(!showMenu)
       
    }

    return (
        <div className={style.content_section} onClick={() => { setShowMenu(false) }}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
                onClick={handleShowMenu}
            ></i>
            <Routes>
                
                <Route path="/user" element={<Users />} />
                <Route path="/user/add" element={<AddUser />}>
                    <Route path=":userId" />
                </Route>
                <Route path="/post" element={<Posts />} />
                <Route path="/post/add" element={<AddPost/>}>
                        <Route path=":postId"/>
                    </Route>
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/todo" element={<Todos />} />
                <Route path="*" element={<Users />} />
            </Routes>
        </div>
    )

}

export default Content;