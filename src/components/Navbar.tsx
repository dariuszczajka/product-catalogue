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

export const Navbar = () => {

    const Wrapper = styled(Box)({
        backgroundColor: "#ffffff",
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "100%",
        height: "5rem",
        textTransform: "none",
        gap: "5rem",
    });

    const Logo = styled("b")({
       fontSize: "24px",
       alignSelf: "center",
       marginLeft: "2rem",
    });

    return(
        <Wrapper>
            <Logo>join.tsh.io</Logo>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: '3rem', alignSelf: 'center'}}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                    </IconButton>
            </Paper>
            <FormGroup sx={{flexDirection: 'row'}}>
                <FormControlLabel  control={<Checkbox />} label="Active" />
                <FormControlLabel  control={<Checkbox />} label="Promo" />
            </FormGroup>
            <Avatar sx={{ bgcolor: deepPurple[500], alignSelf: 'center'}}>OP</Avatar>
        </Wrapper>

    )
}
export default Navbar;