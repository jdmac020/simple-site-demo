import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { AboutMe } from './AboutMe';
import { Header } from './Header';

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Header />
      <AboutMe isMobile={isMobile} />
    </>
  );
};
