import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvidersProps } from './AppProviders.types';
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: `Nunito, sans-serif`,
        fontWeightRegular: 600,
    },
});

export const AppProviders = ({ children }: AppProvidersProps) => (
    <ThemeProvider theme={theme}>
        <Router>{children}</Router>
    </ThemeProvider>)
;
