import { createTheme } from '@mui/material';

export const theme = createTheme();

theme.typography.h1 = {
  fontSize: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem'
  }
};

theme.typography.h2 = {
  fontSize: '3.50rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.50rem'
  }
};

theme.typography.h4 = {
  fontSize: '2.125rem',
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.125rem'
  }
};

theme.typography.body1 = {
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.75rem'
  }
};
