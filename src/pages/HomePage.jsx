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
    )
}

export default HomePage;    