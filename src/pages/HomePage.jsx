import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Container, CssBaseline, Fab, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CardItem from '../components/CardItem';
import { getAllBooks } from '../domain/api';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

function HomePage(){

    const [books, setBooks] = useState([]);
    const navigation = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        setIsLoading(true);
        try{
            // const data = await getAllBooks();
            const data = await new Promise((resolve) => {
                setTimeout(async () => {
                  const fetchedData = await getAllBooks();
                  resolve(fetchedData);
                }, 1000);
              });
            setBooks(data)
        }catch(error){
            console.error("Error fetching data:", error);
        }finally {
            setIsLoading(false); // Set loading to false when the fetch is complete
          }
    };

    if (isLoading) {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
          <CircularProgress />
        </Box>
        ); // Display loading message while fetching data
      }

    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={'xl'}>
                <Grid container item xs={12} alignItems="center" justify="center" spacing={3} sx={{ display:'flex', flexWrap: 'wrap' }} >
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
                <AddIcon onClick={() => navigation("/add") } />
            </Fab>
        </React.Fragment>
    )
}

export default HomePage;    