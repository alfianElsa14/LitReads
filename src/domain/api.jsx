import axios from "axios";

const BASE_URL = 'http://localhost:5000/books'

export const getAllBooks = async () => {
    const response = await axios.get(`${BASE_URL}?favorite=false`)
    return response.data
}

export const getAllFavorites = async () => {
    const response = await axios.get(`${BASE_URL}?favorite=true`)
    return response.data
}

export const likeBooks = async (id, currentFavorite) => {
    try{
        const response = await axios.patch(`${BASE_URL}/${id}`, {
            favorite: !currentFavorite
        })
        return response.data
    }catch(error){
        console.log("Error linking the book:", error )
        throw error
    }
}