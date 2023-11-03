import styleAdd from '../style/add.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const App = () => {
    const [bookData, setBookData] = useState({
        title: '',
        description: '',
        category: 'Comedy',
        image: 'https://source.unsplash.com/random?book',
        favorite: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!bookData.title || !bookData.description || !bookData.category) {
          alert('Semua data harus diisi');
          return;
        }

        try {
            const bookCheckResponse = await axios.get(`http://localhost:5000/books?title=${bookData.title}`);
      
            if (bookCheckResponse.data.length > 0) {
              alert('Buku sudah terdaftar');
              return;
            }
            const response = await axios.post('http://localhost:5000/books', bookData);
            if (response.status === 201) {
              alert('Berhasil menambah data');
            } else {
              console.error('Gagal menambahkan buku');
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
    

    return (
        <div className={styleAdd.container}>
          <h1>Add Book</h1>
          <Link to='/'>
            <button className={styleAdd.back}>Back to home</button>
          </Link>
          <form onSubmit={handleSubmit}>
            <div className={styleAdd.inputItem}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={bookData.title}
                onChange={handleChange}
              />
            </div>
            <div className={styleAdd.inputItem}>
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                name="description"
                value={bookData.description}
                onChange={handleChange}
                rows={6}
              />
            </div>
            <div className={styleAdd.inputItem}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={bookData.category}
                onChange={handleChange}
                className={styleAdd.select}
              >
                <option value="comedy">comedy</option>
                <option value="fiction">fiction</option>
                <option value="drama">drama</option>
              </select>
            </div>
            <button type="submit" className={styleAdd.addAccount}>
              Add Book
            </button>
          </form>
        </div>
    )
}

export default App;