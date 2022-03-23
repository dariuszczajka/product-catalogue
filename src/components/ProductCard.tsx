import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Rating} from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const ProductCardActions = styled(CardActions)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

const ActiveBtn = styled(Button)({
    backgroundColor: "#4460F7",
    width: "95%",
    textTransform: "none",
});

const DisabledBtn = styled(Button)({
    backgroundColor: "#9194A5",
    width: "95%",
    textTransform: "none",
    color: "#FFFFFF",
});

interface ProductCardProps{
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
}

export const ProductCard: React.VFC<ProductCardProps> = ({
    id,
    name,
    description,
    rating,
    image,
    promo,
    active}) => {
    return(
        <Card sx={{ maxWidth: '20rem' }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>

            </CardContent>
            <ProductCardActions>
                <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                <ActiveBtn
                    variant="contained"
                    size="small">Show details</ActiveBtn>
            </ProductCardActions>
        </Card>
    );
};

export default ProductCard;

