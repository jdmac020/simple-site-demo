import { AppBar, Toolbar, Grid, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif';

export const NavBar = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar sx={{ background: 'white' }}>
        <Grid container justifyContent={'flex-start'} sx={{ marginTop: '.5rem' }}>
          <Link to={'/'}>
            <img src={logo} height={'70'} width={'70'} />
          </Link>
        </Grid>
        <Grid container justifyContent={'space-around'} width={'75%'}>
          <NavLink to={'/'}>About Me</NavLink>
          <NavLink to={'/'}>My Links</NavLink>
          <NavLink to={'/'}>Photos</NavLink>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const NavLink = styled(Link)`
  font-weight: bold;
  color: black;
  a {
    text-decoration: none;
  }
`;