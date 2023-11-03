import axios from "axios";

const BASE_URL = 'http://localhost:5000/books?favorite=false'

export const getAllBooks = async () => {
    const response = await axios.get(BASE_URL)
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