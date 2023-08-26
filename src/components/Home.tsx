import React from 'react';
import { Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import headshot from '../assets/headshot.png';

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container justifyContent={'center'} sx={{ backgroundColor: 'lightblue'}}>
      <Typography variant={'h1'} marginBottom={'2rem'}>Welcome to Misx Fox&apos;s Den</Typography>
      <Grid container direction={isMobile ? 'column' : 'row'} alignContent={isMobile ? 'center' : ''}>
        <HeadShot src={headshot}/>
        <Typography variant={'body1'} padding={'2rem'} paddingTop={isMobile ? '' : '8rem'} maxWidth={isMobile ? '85%' : '50%'}>
          This is the quick little intro of who I am and what I&apos;m all about! It can go on for quite a while but should be pretty eye-catching so folks
          don&apos;t get bored or otherwise wander away without wanting to click on some other links.
        </Typography>
      </Grid>
    </Grid>
  );
};

const HeadShot = styled('img')`
  height: auto;
  width: 45%;
  @media (max-width: 900px) {
    width: 85%;
  }
`;
