import axios from 'axios'
import React, { useState } from 'react'

export default function Register({setStatus}) {

    const [form, setForm] = useState({
        name:'',
        phone:'',
        email:'',
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
            await axios.post("http://localhost:8000/user/register", form)

            setMessage('Berhasil Register')


        } catch (error) {
            console.log(error);
        }
    }
    const status = () => {
        setStatus('login')
    }
    return (
        <div>
            <p className='fw-bold m-0' >Welcome to To Do List</p>
            <p className='mb-5 ' style={{ fontSize: '12px' }} >Please sign-in to your account, and start manage further</p>
            <form onSubmit={(e) => handleSubmit(e)} >
                <h5>Sign Up</h5>
                {message && <div class="alert alert-danger" role="alert">
                    {message}
                </div>}
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" name='name' onChange={handleChange} placeholder='Your registered username' />
                </div>
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" name='phone' onChange={handleChange} placeholder='Your registered username' />
                </div>
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" name='email' onChange={handleChange} placeholder='Your registered username' />
                </div>
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" name='username' onChange={handleChange} placeholder='Your registered username' />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name='password' onChange={handleChange} placeholder='*****' />
                </div>
                <button type="submit" class="btn btn-primary w-100 mb-2 " >SIGN UP</button>
                <p className='text-center' >Already have an account? <span className='text-info' style={{ cursor: "pointer" }} onClick={status} >Sign In</span> </p>
            </form>
        </div>
    )
}