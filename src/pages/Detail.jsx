import React, { useEffect, useState } from 'react'
import style from '../style/details.module.scss'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'


function Detail() {
    const [detailBook, setDetailBook] = useState()
    const { id } = useParams()
    const navigation = useNavigate()

    async function fetchBookById() {
        try {
            const response = await axios.get(`http://localhost:3000/books/${id}`)
            console.log(response);
            setDetailBook(response.data)
        } catch (error) {
            console.log(error);
        }
    }


    async function deleteBookById(id) {
        try {
            const confirmed = window.confirm('Apakah Anda yakin ingin menghapus akun ini?');

            if (!confirmed) {
                return;
            }
            const deleteBook = await axios.delete(`http://localhost:3000/books/${id}`)
            navigation("/")
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
                    <h1>{detailBook?.title}</h1>
                    <p><strong>Description: </strong> {detailBook?.description}</p>
                    <br />
                    <p><strong>Category: </strong> {detailBook?.category}</p>
                    <button onClick={() => navigation(`/edit/${detailBook?.id}`)}>Edit</button>
                    <button onClick={() => {deleteBookById(detailBook?.id)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Detail