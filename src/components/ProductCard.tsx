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
    justifyContent: 'flex-end',
    gap: '1rem',
    position: 'absolute',
    bottom: '1rem',
    width: '95%',
});

const ActiveBtn = styled(Button)({
    backgroundColor: "#4460F7",
    width: "100%",
    textTransform: "none",
});

const DisabledBtn = styled(Button)({
    backgroundColor: "#9194A5",
    width: "95%",
    textTransform: "none",
    color: "#FFFFFF",
});

const Promo = styled("span")({
    backgroundColor: "#F9A52B",
    color: "#FFFFFF",
    textAlign: 'center',
    width: "75px",
    height: "24px",
    position: 'absolute',
    marginTop: '15px'
})

const DisabledPromo = styled("span")({
    backgroundColor: "#ff0000",
    color: "#FFFFFF",
    textAlign: 'center',
    width: "75px",
    height: "24px",
    position: 'absolute',
    marginTop: '15px'
})

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
        <Card sx={{height: '25rem', position: 'relative'}}>
            {active ?
                <>
                {promo && <Promo>Promo</Promo>}
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                />
                </>
            :
                <>
                    {promo && <DisabledPromo>Promo</DisabledPromo>}
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={name}
                        sx={{filter: 'grayscale(100%)'}}
                    />
                </>

            }
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <ProductCardActions>
                <Rating sx={{alignSelf: 'flex-start'}} name="half-rating" defaultValue={rating} readOnly precision={0.5} />
                {active ?
                    <ActiveBtn
                    variant="contained"
                    size="small">Show details</ActiveBtn>
                    :
                    <DisabledBtn
                    variant="contained"
                    size="small"
                    disabled>Show details</DisabledBtn>
                }
            </ProductCardActions>
        </Card>
    );
};

export default ProductCard;

