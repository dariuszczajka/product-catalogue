import {styled} from "@mui/system";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

const Wrapper = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
});

const ImageWrapper = styled(Box)({
    flexGrow: 1
});

const FormWrapper = styled(Box)({
    flexGrow: 2
});

export const Login = () => {
    return(
        <Wrapper>
            <ImageWrapper>
                <Box
                    component="img"
                    sx={{
                        display: 'flex',
                        alignSelf: 'stretch',
                    }}
                    alt="The house from the offer."
                    src="https://i.imgur.com/QRg8qhr.png"
                />
            </ImageWrapper>
            <FormWrapper>
                <Typography>tu bedzie formularz</Typography>
            </FormWrapper>
        </Wrapper>
    )
}

