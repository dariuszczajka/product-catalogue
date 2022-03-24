import {styled} from "@mui/system";
import {Box} from "@mui/material";

const Wrapper = styled(Box)({
    margin: "2rem 2rem 0 2rem",
    display: 'flex',
    justifyContent: 'center',
});

const NoProducts = () => {
    return(
        <Wrapper>
            <p>nic tu nie ma panie ferdku proszę scrollować dalej</p>
        </Wrapper>
        )
}
export default NoProducts;