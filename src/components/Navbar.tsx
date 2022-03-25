import {styled} from "@mui/system";
import {User} from "../models/User";

import {
    Avatar,
    Box,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputBase, Menu, MenuItem,
    Paper
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {deepPurple} from "@mui/material/colors";
import * as React from "react";
import {useEffect, useState} from "react";
import media from "styled-media-query";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {AppRoute} from "../routing/AppRoute.enum";
import {useHistory} from "react-router-dom";

interface NavbarProps{
    searchBarCallback: Function,
    activeButtonCallback: Function,
    promoButtonCallback: Function,
    user?: User
}

export const Navbar: React.VFC<NavbarProps> = ({searchBarCallback, activeButtonCallback,promoButtonCallback, user}) => {

    const history = useHistory();
    const[isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const Wrapper = styled(Box)({
        backgroundColor: "#ffffff",
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "95%",
        height: "5rem",
        textTransform: "none",
        gap: "5rem",
        padding: "0 2rem 0 2rem",
        '@media (max-width: 768px)' : {
            flexDirection: 'column',
            height: "10rem",
            gap: "1rem",
            width: "85%",
        }
    });

    const Logo = styled(Typography)({
       fontSize: "24px",
       alignSelf: "center",
        '@media (max-width: 768px)' : {
           paddingTop: '1rem',
           alignSelf: "flex-start"
        }
    });

    useEffect(() => {
        if(user != undefined){
            setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false);
        }
    },[user?.username]);

    const[query, setQuery] = useState<string>("");
    const[active, setActive] = useState<boolean>(false);
    const[promo, setPromo] = useState<boolean>(false);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        handleClose();
    }

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleActiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActive(event.target.checked);
        activeButtonCallback(event.target.checked);
    };

    const handlePromoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPromo(event.target.checked);
        promoButtonCallback(event.target.checked);
    };

    return(
        <Wrapper>
            <Logo>join.tsh.io</Logo>
                <Paper
                    component="form"
                    sx={{ display: 'flex', alignItems: 'center', width: '20rem', height: '3rem', marginTop: '1rem',alignSelf: 'flex-start'}}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        value={query}
                        onChange={handleQueryChange}
                        autoFocus
                        />
                    <IconButton type="submit" onClick={() => {
                        searchBarCallback(query);
                    }} sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <FormGroup sx={{flexDirection: 'row'}}>
                    <FormControlLabel  control={<Checkbox checked={active} onChange={handleActiveChange} />} label="Active"  />
                    <FormControlLabel  control={<Checkbox checked={promo} onChange={handlePromoChange} />} label="Promo" />
                </FormGroup>

            {isLoggedIn ?
                <>
                    <Button onClick={handleClick}>
                        <Avatar sx={{
                            bgcolor: deepPurple[500], alignSelf: 'center',
                            '@media (max-width: 768px)': {
                                alignSelf: 'flex-end',
                                position: 'absolute',
                                top: '1rem'
                            },
                        }} src={user?.avatar} />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom',horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </>
                :
                <Button variant="text" sx={{
                    '@media (max-width: 768px)': {
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    top: '1rem'
                }}} onClick={() => history.push(AppRoute.Login)}>Log in</Button>
            }

        </Wrapper>

    )
}
export default Navbar;