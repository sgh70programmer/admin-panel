import React, { useContext } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';



const Sidebar = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)
    

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? {right:0}: {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                </li>
                <li>
                    <NavLink to="/user">کاربران</NavLink>
                </li>
                <li>
                    <NavLink to="post">پست ها</NavLink>
                </li>
                <li>
                    <NavLink to="gallery">گالری</NavLink>
                </li>
                <li>
                    <NavLink to="todo">کارها</NavLink>
                </li>
            </ul>
        </div>
    )

}

export default Sidebar;