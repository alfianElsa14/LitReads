import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import Classes from "../styles/styles.module.scss";
import axios from "axios";

const CardItem = ({getBooks, image, title, id, favorite}) => {
    const onLikeBookHandler = async (id, currentFavorite) => {
        await axios.patch(`http://localhost:5000/books/${id}`, {
            favorite: !currentFavorite
        });
        getBooks(); // to refresh the book list
    };
    console.log(image)
    return(
        <Grid item xs={3}>
            <Card elevation={5} sx={{ maxWidth: 345 }}>
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
                    <Button size="small">Detail</Button>
                        <Button size="small" onClick={() => onLikeBookHandler(id, favorite)}>{favorite ? 'Unlike' : 'Like'}</Button>
                    </Box>
                </Card>
        </Grid>
    )
}
export default CardItem;