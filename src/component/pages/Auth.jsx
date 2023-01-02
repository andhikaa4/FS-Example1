import React, { useState } from 'react'
import Login from './auth/login'
import Register from './auth/register'
import image from './images/login.png'


export default function Auth() {
    const [status, setStatus] = useState('login')
    return (
        <div className='py-3 d-flex' >
            <div className='p-3 d-flex justify-content-center ' style={{width:"70vw",height:"100vh", backgroundColor:'#fafafa'}}>
                <div >
                    <h1 className='fw-bold' style={{ background: 'linear-gradient(to right, #e9565c, #aa53c6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: "transparent", fontSize: "90px", width: "300px" }} >TO DO <br /> LIST</h1>
                    <img src={image} alt="" />
                </div>
            </div>
            <div style={{width:"30vw"}} className='px-5 py-5' >
                {status === 'login' ? 
                <Login setStatus={setStatus} />:
                status === 'register' &&
                <Register setStatus={setStatus}/>
            }
            </div>
        </div>
    )
}
