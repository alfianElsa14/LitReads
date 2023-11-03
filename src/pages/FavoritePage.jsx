import { Box, Container, CssBaseline, Grid } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import { getAllFavorites } from "../domain/api";

function FavoritePage (){
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    setIsLoading(true);
    // const response = await axios.get('http://localhost:5000/books?favorite=true');
    try{
      // const data = await getAllFavorites();
      const data = await new Promise((resolve) => {
        setTimeout(async () => {
          const fetchedData = await getAllFavorites();
          resolve(fetchedData);
        }, 1000);
      });
      setFavorites(data)
    }catch(error){
        console.error("Error fetching data:", error);
    }finally {
      setIsLoading(false); // Set loading to false when the fetch is complete
    }
  
    // setFavorites(response.data);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
      <CircularProgress />
    </Box>
    ); // Display loading message while fetching data
  }



//   if (favorites.length === 0) {
//     return <BookNoFound />;
// }
    return favorites ? (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Grid container item xs={12} alignItems="center" justify="center" spacing={3}>
                
                {favorites.map(favorite => (
                        <CardItem key={favorite.id} getBooks={getFavorites} {...favorite}/>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    ): <p>loading</p>
}

export default FavoritePage