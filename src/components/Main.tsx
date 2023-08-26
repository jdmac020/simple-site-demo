import React from 'react';
import { NavBar } from './NavBar';
import { Outlet } from 'react-router-dom';
import { Container, Grid, ThemeProvider } from '@mui/material';
import { theme } from '../style';

export const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth={'lg'} fixed>
        <Grid container justifyContent={'center'} sx={{ paddingTop: '50px'}}>
          <Outlet />
        </Grid>
      </Container>
    </ThemeProvider>
  );
};