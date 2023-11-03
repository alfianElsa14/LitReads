import React from 'react'
import styleAdd from '../style/add.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Edit() {
    const [detailBook, setDetailBook] = useState()
    const { id } = useParams()

    async function fetchBookById() {
        try {
            const response = await axios.get(`http://localhost:3000/books/${id}`)
            console.log(response);
            setDetailBook(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBookById()
    }, [])

    return (
        <div className={styleAdd.container}>
            <h1>Edit Book</h1>
            <Link to='/'>
                <button className={styleAdd.back}>Back to home</button>
            </Link>
            <form>
                <div className={styleAdd.inputItem}>
                    <label htmlFor="title">Book Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={detailBook?.title}
                    />
                </div>
                <div className={styleAdd.inputItem}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        value={detailBook?.description}
                    />
                </div>
                <div className={styleAdd.inputItem}>
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        className={styleAdd.select}
                        value={detailBook?.category}
                    >
                        <option value="comedy">comedy</option>
                        <option value="fiction">fiction</option>
                        <option value="drama">drama</option>
                    </select>
                </div>
                <button type="submit" className={styleAdd.addAccount}>
                    Edit Book
                </button>
            </form>
        </div>
    )
}

export default Edit