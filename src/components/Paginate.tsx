import {Box, Pagination} from "@mui/material";
import {styled} from "@mui/system";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";

const PaginationWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    margin: "2rem 2rem 0 2rem",
    gap: '1rem',
    flexDirection: 'row',
});

interface PaginationProps{
    pages: number,
    callback: Function
}

export const Paginate: React.VFC<PaginationProps> = ({pages, callback}) => {

    const[page, setPage] = useState<number>(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        callback(value);
    };

    return(
        <PaginationWrapper>
            <Button variant="text" onClick={() => {setPage(1); callback(1)}}>First</Button>
            <Pagination  count={pages} page={page} onChange={handleChange}/>
            <Button variant="text" onClick={() => {setPage(pages); callback(pages)}}>Last</Button>
        </PaginationWrapper>
    )
}
