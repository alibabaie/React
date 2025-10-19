import React, { useContext, useState } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import AddUser from './users/AddUser'
import EditDesc from './users/EditDesc'
import { Navigate, Route, Routes } from 'react-router-dom';
import WithAlert2 from './HOC/WithAlert2';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    const [isUser , setIsuser] = useState(false);

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    const renderUser = (Confirm , Alert)=> <Users Confirm={Confirm} Alert={Alert}/>

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`} 
            onClick={handleShowMenu}
            ></i>
            
            <Routes>
                {/* <Route path='/' element={isUser ? <Users/> : <Navigate replace to="/posts"  />} /> */}
                <Route path='/user' element={
                    <WithAlert2>
                        {renderUser}
                    </WithAlert2> 
                } />
                <Route path='/user/add' element={<AddUser/>}>
                 <Route path=':userId' />
                {/* <Route path=':userId' element={<EditDesc />} /> */}
                </Route>
                <Route path='/post' element={<Posts/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/todo' element={<Todos/>} />
                <Route path='*' element={
                    <WithAlert2>
                        {renderUser}
                    </WithAlert2>
                    } />
            </Routes>
            
        </div>
    )

}

export default Content;