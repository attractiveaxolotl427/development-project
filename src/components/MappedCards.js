import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function MappedCards({item, addToCart}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia 
                  component="img"
                  image={item.image}
                  alt={item.description}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name} 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description} 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={(e) => addToCart(e, item)}>
                  Add to Cart
                </Button>
                <Typography variant="body2" color="text.secondary">
                    Price: ${item.price}
                </Typography>
              </CardActions>
            </Card>
  );
}

export default MappedCards;