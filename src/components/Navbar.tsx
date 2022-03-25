import {styled} from "@mui/system";
import {
    Avatar,
    Box,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputBase,
    Paper
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {deepPurple} from "@mui/material/colors";
import * as React from "react";
import {useState} from "react";
import media from "styled-media-query";
import Typography from "@mui/material/Typography";

interface NavbarProps{
    searchBarCallback: Function,
    activeButtonCallback: Function,
    promoButtonCallback: Function,
}

export const Navbar: React.VFC<NavbarProps> = ({searchBarCallback, activeButtonCallback,promoButtonCallback}) => {

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

    const[query, setQuery] = useState<string>("");
    const[active, setActive] = useState<boolean>(false);
    const[promo, setPromo] = useState<boolean>(false);

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
            <Avatar sx={{ bgcolor: deepPurple[500], alignSelf: 'center',
                '@media (max-width: 768px)' : {
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    top: '1rem'
                },
                }}>DC</Avatar>
        </Wrapper>

    )
}
export default Navbar;