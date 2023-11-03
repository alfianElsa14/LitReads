import { Container, CssBaseline, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";

function FavoritePage (){
    const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    const response = await axios.get('http://localhost:5000/books?favorite=true');
    setFavorites(response.data);
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
                    {favorites.map(favorite => (
                        <CardItem key={favorite.id} getFavorite={getFavorites} {...favorite}/>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default FavoritePage