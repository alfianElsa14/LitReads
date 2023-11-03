import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, CssBaseline, Fab, Grid } from '@mui/material';
import CardItem from '../components/CardItem';
import { getAllBooks } from '../domain/api';
import AddIcon from '@mui/icons-material/Add';

function HomePage(){

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try{
            const data = await getAllBooks();
            setBooks(data)
        }catch(error){
            console.error("Error fetching data:", error);
        }
        const response = await axios.get('http://localhost:5000/books');
        setBooks(response.data);
    };

   

    return(
        <React.Fragment>
            <CssBaseline />
            <Container 
                maxWidth="sm" 
                sx={{ 
                    padding: 5
             }}>
                <Grid container spacing={2}>
                    {books.map(book => (
                        <CardItem key={book.id} getBooks={getBooks} {...book}/>
                    ))}
                </Grid>
            </Container>
            <Fab color="primary" aria-label="add" 
                sx={{ 
                    position: 'absolute',
                    bottom: 15,
                    right: 15
                 }}
            >
                <AddIcon />
            </Fab>
        </React.Fragment>
        
        // <div>
        // <h1>Book List</h1>
        // {books.map(book => (
        //     <div key={book.id}>
        //     <h2>{book.title}</h2>
        //     <p>{book.description}</p>
        //     <p>{book.category}</p>
        //     <img src={book.image || "https://source.unsplash.com/random?signin"} alt="Book Cover" />
        //     <p>Favorite: {book.favorite ? 'Yes' : 'No'}</p>
        //     <button onClick={() => likeBook(book.id)}>Like</button>
        //     </div>
        // ))}
      
        // </div>
    )
}

export default HomePage;    