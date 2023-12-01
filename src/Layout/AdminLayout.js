import { Outlet } from 'react-router-dom'
import { useState, useContext } from 'react';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import React from 'react'
import Loading from '../Components/Loading';
import UserContext from '../Contexts/UserContext'

const AdminLayout = () => {
    const [show, setShow] = useState(true)
    const handleSideBar = () => setShow(!show)
    const {isLoading} = useContext(UserContext)
    console.log('loading', isLoading)

    return(
        <>
            {isLoading ? (
                <Loading/>
            ):(
                <>
                    <Navbar setShow={handleSideBar}/>
                    <div className="main-container d-flex" style={{height:"100vh"}}>
                        {/* <Sidebar sideBar={show}/> */}
                        <div className={`outlet ${show? "main-content":"main-content-expand"} flex-groq-1 border-start`}>
                            <Outlet show={show}/>
                        </div>
                    </div>
                    <div className='footer fixed-bottom text-dark text-end py-2 border-top' style={{backgroundColor:"#f0f3f5", fontSize:"14px"}}>
                        <span className='my-3 mx-4 px-2'>
                            {`Copyright Temasek Polytechnic`}
                        </span>
                    </div>
                </>
            )}
        </>
    )
}

export default AdminLayout