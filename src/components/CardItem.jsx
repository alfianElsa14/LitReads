import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import Classes from "../styles/styles.module.scss";
import axios from "axios";
import { likeBooks } from "../domain/api";
import { useNavigate } from "react-router";

const CardItem = ({getBooks, image, title, id, favorite}) => {
    const navigate = useNavigate()
    const onLikeBookHandler = async (id, currentFavorite) => {
        try{
            await likeBooks(id, currentFavorite)
            getBooks();
        }catch(error){
            alert("mampus error")
        }
        
    };
    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card elevation={5} sx={{ maxWidth: '100%', marginTop: 2 }}>
                <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title={title}
                        className={Classes.imghome}
                    />
                    <Box sx={{ 
                        display: "flex",
                        paddingX: 1
                    }}>
                        <Typography gutterBottom variant="body2" component="div">
                            {title}
                        </Typography>
                    </Box>
                <Box sx={{
                    display: "flex"
                }}>
                    <Button onClick={() => navigate(`/detail/${id}`)} size="small">Detail</Button>
                        <Button size="small" onClick={() => onLikeBookHandler(id, favorite)}>{favorite ? 'Unlike' : 'Like'}</Button>
                    </Box>
                </Card>
        </Grid>
    )
}
export default CardItem;