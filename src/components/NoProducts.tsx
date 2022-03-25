import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {ReactComponent as EmptyIcon} from "../assets/EmptyIcon.svg"
import Typography from "@mui/material/Typography";

const Wrapper = styled(Box)({
    borderRadius: "8px",
    display: 'flex',
    width: "600px",
    height: "344px",
    margin: "auto",
    marginTop: "2rem",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    flexDirection: 'column',
    '@media (max-width: 768px)' : {
        width: '100%'
    }
});

const Header = styled(Typography)({
    fontSize: '16px',
    margin: "1rem 0 0 0"
})

const Desc = styled(Typography)({
    fontSize: '14px',
    color: "#9194A5",
})
const NoProducts = () => {
    return(
        <Wrapper>
            <EmptyIcon/>
            <Header>Ooops... It's empty here</Header>
            <Desc>There are no products on the list</Desc>
        </Wrapper>
        )
}
export default NoProducts;