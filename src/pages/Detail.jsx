import React from 'react'
import style from '../style/details.module.scss'


function Detail() {
    return (
        <div className={style.containerDetail}>
            <h1>Detail Pages</h1>
            <div className={style.content}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJkvh-di8jG7jLfRy87sqSboqb5tf1h5NpQ&usqp=CAU" alt="" />
                <div className={style.desricption}>
                    <p>Title: </p>
                    <p>Description: </p>
                    <p>Author: </p>
                    <p>Favorites: </p>
                </div>

            </div>
        </div>
    )
}

export default Detail