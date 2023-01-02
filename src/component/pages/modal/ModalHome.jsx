import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalHome({ show, setShow , getData}) {
    const handleClose = () => {
        setShow(false)
    }

    const [cate, addCate] = useState({
        category:''
    })

    const handleChange = (e) => {
        addCate({
            [e.target.name]: e.target.value
        })
    }

    const addCategory = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/category',
                {
                    category: cate.category,
                    user: localStorage.getItem('name')
                })

                getData()
                handleClose()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <form >
                        <input type="text" className='form-control w-100 mb-3' placeholder='Add a New Category' name="category" onChange={handleChange} />
                        <button className='btn btn-primary text-right' type="submit" onClick={(e) => addCategory(e)}>Add Category</button>
                    </form>
                </Modal.Body>

            </Modal>
        </div>
    );
}

