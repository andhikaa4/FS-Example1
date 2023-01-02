import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setStatus, setPage }) {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: '',
        password: '',
    })
    const [message, setMessage] = useState(null)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/user/login", form)
            localStorage.setItem('name', response.data.message)
            setMessage('Berhasil Login')
            setTimeout(() => {
                navigate('/home')
            },2000)

        } catch (error) {
            console.log(error);
        }
    }

    const status = () => {
        setStatus('register')
    }


    return (
        <div>
            <p className='fw-bold m-0' >Welcome to To Do List</p>
            <p className='mb-5 ' style={{ fontSize: '12px' }} >Please sign-in to your account, and start manage further</p>
            <form onSubmit={(e) => handleSubmit(e)} >
                <h5>Sign In</h5>
                {message && <div class="alert alert-danger" role="alert">
                    {message}
                </div>}
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"  >Username</label>
                    <input type="text" className="form-control" name='username' onChange={handleChange} placeholder='Your registered username' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={handleChange} name='password' placeholder='*****' />
                </div>
                <button type="submit" className="btn btn-primary w-100 ">SIGN IN</button>
                <p className='text-center' >Don't have an account yet? <span className='text-info' style={{ cursor: "pointer" }} onClick={status} >Sign Up</span> </p>
            </form>
        </div>
    )
}
