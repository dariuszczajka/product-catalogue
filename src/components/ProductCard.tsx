import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Box, IconButton, Rating} from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Close from '@mui/icons-material/Close';

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
    width: "100%",
    textTransform: "none",
    color: "#FFFFFF",
});

const Promo = styled(Typography)({
    backgroundColor: "#F9A52B",
    color: "#FFFFFF",
    textAlign: 'center',
    width: "75px",
    height: "24px",
    position: 'absolute',
    marginTop: '15px'
})

const DisabledPromo = styled(Typography)({
    backgroundColor: "#3b4047",
    color: "#FFFFFF",
    textAlign: 'center',
    width: "75px",
    height: "24px",
    position: 'absolute',
    marginTop: '15px',
    zIndex: 1
})

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
    display: 'flex',
    flexDirection: 'column',
};

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



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
                <Typography gutterBottom variant="h6" component="div">
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
                    size="small"
                    onClick={handleOpen}
                    >Show details</ActiveBtn>
                    :
                    <DisabledBtn
                    variant="contained"
                    size="small"
                    disabled>Show details</DisabledBtn>
                }
            </ProductCardActions>
            <StyledModal
                aria-labelledby={name}
                aria-describedby={description}
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <IconButton aria-label="close" size="small" onClick={handleClose} sx={{display: 'flex', width: 20, height: 20, alignSelf: 'flex-end'}}>
                        <Close fontSize="small" />
                    </IconButton>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={name}
                    />
                    <h2 id={name}>{name}</h2>
                    <p id={description}>{description}</p>
                </Box>
            </StyledModal>
        </Card>
    );
};

export default ProductCard;

