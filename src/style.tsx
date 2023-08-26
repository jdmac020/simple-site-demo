import { createTheme } from '@mui/material';

export const theme = createTheme();

theme.typography.h1 = {
  fontSize: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem'
  }
};

theme.typography.body1 = {
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.75rem'
  }
};
