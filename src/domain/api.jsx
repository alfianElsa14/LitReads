import axios from "axios";

const BASE_URL = 'http://localhost:5000/books'

export const getAllBooks = async () => {
    const response = await axios.get(BASE_URL)
    return response.data
}