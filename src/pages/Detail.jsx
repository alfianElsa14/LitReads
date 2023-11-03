import React, { useEffect, useState } from 'react'
import style from '../style/details.module.scss'
import axios from 'axios'


function Detail() {
    const [detailBook, setDetailBook] = useState()

    async function fetchBookById() {
        try {
            const response = await axios.get(`http://localhost:3000/books/1`)
            setDetailBook(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBookById()
    }, [])

    return (
        <div className={style.containerDetail}>
            <h1>Detail Page</h1>
            <div className={style.content}>
                <img src={detailBook?.image} alt="" />
                <div className={style.desricption}>
                    <p>Title: {detailBook?.title}</p>
                    <p>Description: {detailBook?.description}</p>
                    <p>Category: {detailBook?.category}</p>
                    <p>Favorites: {detailBook?.favorite}</p>
                    <button>Edit</button>
                    <button>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Detail