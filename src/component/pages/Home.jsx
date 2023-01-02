import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ModalHome from './modal/ModalHome'
import randomColor from 'randomcolor'

export default function Home() {
    const [data, setData] = useState(null)
    const [task, setTask] = useState(null)
    const [show, setShow] = useState(false)

    const name = localStorage.getItem('name') 
    const category = localStorage.getItem('category') 

    const getData = async() => {
        const response = await axios.get('http://localhost:8000/category')
        const resp = await axios.get('http://localhost:8000/todo')
        setData(response.data)
        setTask(resp.data)
    }

    useEffect(()=>{
        if (!data) {
            getData()
        }
    },[data])

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            
                const data = {
                    todo:e.target.elements.todo.value,
                    status:'ongoing',
                    category:localStorage.getItem('category'),
                    color:randomColor(),
                    user:name,
                }
                axios.post('http://localhost:8000/todo', data)
                getData()
                alert('berhasil menambahkan task')
        } catch (error) {
            console.log(error);
        }

    }

    const handleUpdate = (e, id, status) => {
        e.preventDefault()
        try {
            axios.put('http://localhost:8000/todo/' + id, {status:status})
            getData()
        } catch (error) {
            console.log(error);
        }
    }

    const handleShow = () => {
        setShow(true)
    }
    return (
        <div className='d-flex' >
            <div style={{ width: '30vw' }} className='d-flex align-items-center' >
                <div className='d-flex flex-column w-100 h-50 align-items-center' >
                    <div > 
                        <h5 className='fw-bold' >All Tasks</h5>
                        {data?.map((item) => (
                            item.user === name &&

                        <p style={{cursor:'pointer'}} onClick={() => localStorage.setItem('category', item.category)} >{item.category}</p>
                        ))}
                        <p style={{color:'gray', cursor:'pointer'}} className='fw-bold' onClick={handleShow} >+ New Category</p>
                        <ModalHome show={show} setShow={setShow} getData={getData} />
                    </div>
                </div>
            </div>
            <div style={{ width: '50vw' }} className='px-5 border-start d-flex  align-items-center' >
                <div className='h-75 w-100' >  
                    <h1 className='mb-5' >All Tasks</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='w-100 mb-5 form-control' name='todo' style={{backgroundColor:'lightgray'}} placeholder='Add a new tasks' />
                    </form>

                            {task?.map((item) => (
                                item.user === name && item.category === category &&
                                <div className='mb-1'>              
                                    <label for="" className={item.status === 'true' ? 'text-decoration-line-through' : null }>   <input type="checkbox" checked={item.status} onChange={(e) => {item.status === 'false'? handleUpdate(e,item.id, true): handleUpdate(e,item.id, false)}} className='form-check-input' name='status' /> {item.todo} </label>
                                    <span  className='ms-2 text-white px-3 rounded-pill py-1 ' style={{fontSize:'10px', backgroundColor:`${item.color}`}} >{item.category}</span>
                                </div>
                            ))}
                </div>
            </div>
            <div style={{ width: '20vw', backgroundColor: '#fafafa' }} >

            </div>
            
        </div>
    )
}
