import {styled} from "@mui/system";
import {Box, IconButton, InputBase, Link, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import {AppRoute} from "../../routing/AppRoute.enum";
import {postLogin} from "../../network/postLogin";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {User} from "../../models/User";

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

const ContentWrapper = styled(Box)({
    padding: '0 15rem 0 15rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
    '@media (max-width: 768px)' : {
        padding: '0 2rem 0 2rem',
    }
})

const ImageWrapper = styled(Box)({
    flexGrow: 1,
    '@media (max-width: 768px)' : {
        display: 'none',
    }
});

const FormWrapper = styled(Box)({
    flexGrow: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

const InputFieldWrapper = styled(Box)({
    width: '25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
    '@media (max-width: 768px)' : {
        width: '20rem',
    }
});

const LogoWrapper = styled(Box)({
    top: '2rem',
    position: 'absolute'
});

const Logo = styled(Typography)({
    fontSize: "24px",
    '@media (max-width: 768px)' : {
        paddingTop: '1rem',
        alignSelf: "flex-start"
    }
});

const LoginBtn = styled(Button)({
    backgroundColor: "#4460F7",
});

export const Login = () => {

    const history = useHistory();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        postLogin(username, password)
            .then((response) => {
                localStorage.setItem("user", JSON.stringify({
                    id: response.user.id,
                    username: response.user.username,
                    avatar: response.user.avatar,
                }));

                history.push(AppRoute.Home);
            })
            .catch((error: Error) => {
                console.log(error);
            })
    };

    return(
        <Wrapper>
            <ImageWrapper>
                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                    src="https://i.imgur.com/QRg8qhr.png"
                />
            </ImageWrapper>
            <FormWrapper>
                <ContentWrapper>
                    <LogoWrapper>
                        <Logo>join.tsh.io</Logo>
                    </LogoWrapper>
                    <Typography gutterBottom variant="h5" component="div">
                        Login
                    </Typography>
                    <InputFieldWrapper>
                        <TextField fullWidth label="Username" id="outlined-basic" variant="outlined" onChange={handleUsernameChange} />
                        <TextField fullWidth label="Password" id="outlined-basic" type="password" variant="outlined" onChange={handlePasswordChange}/>
                        <LoginBtn variant="contained" onClick={handleLogin}>Log in</LoginBtn>
                    </InputFieldWrapper>
                    <Link href="#" variant="body2">
                        <Typography>Forgot password?</Typography>
                    </Link>
                </ContentWrapper>
            </FormWrapper>
        </Wrapper>
    )
}

