'use client';
import { Roboto } from 'next/font/google';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { amber, blue } from '@mui/material/colors';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: amber[500],
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: blue[500],
                },
            },
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: 'var(--mui-palette-grey-200)',
                    // color: theme.palette.grey[200], // 2eme solution
                    '[class="dark"] &': {
                        color: 'var(--mui-palette-grey-900)',
                        // color: theme.palette.grey[900], // 2eme solution
                    },
                }),
            },
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;
