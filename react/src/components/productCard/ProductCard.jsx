import { Button, Card, CardActions, CardMedia, Typography } from "@mui/material"


const ProductCard = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={item.img}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {item.title}
      </Typography>
      <Typography variant="h" color="text.secondary">
       {item.descripcion}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      $ {item.precio} .
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="container">Ver Detalle</Button>
    </CardActions>
  </Card> )
}
 { /* <div>
         <h2>{item.title}</h2>
  </div>*/} 
 

export default ProductCard