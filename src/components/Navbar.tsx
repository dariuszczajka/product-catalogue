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
    });

    const Logo = styled("b")({
       fontSize: "24px",
       alignSelf: "center",
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
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: '3rem', alignSelf: 'center'}}>
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
            <Avatar sx={{ bgcolor: deepPurple[500], alignSelf: 'center'}}>DC</Avatar>
        </Wrapper>

    )
}
export default Navbar;