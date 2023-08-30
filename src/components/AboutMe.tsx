import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import headshot from '../assets/headshot.png';

interface AboutMeProps {
  isMobile: boolean;
}

export const AboutMe = ({ isMobile}: AboutMeProps) => (
  <Grid container justifyContent={'center'} sx={{ backgroundColor: 'lightblue'}}>
    <Grid container direction={isMobile ? 'column' : 'row'} alignContent={isMobile ? 'center' : ''}>
      <HeadShot src={headshot}/>
      <Grid container paddingLeft={isMobile ? '' : '2rem'} maxWidth={isMobile ? '85%' : '50%'} alignItems={'center'} rowGap={isMobile ? 4 : ''}>
        <Typography variant={'h2'}>
          Domme by Nature -- Big Bodied by Snacks
        </Typography>
        <Typography variant={'h4'}>
          I&apos;m a 30 year old pansexual Sadist Domme. My numbers are 345 lbs. and 46G; make sure you can handle them before you approach me.
        </Typography>
        <Typography variant={'body1'}>
          I have been a Dominant for over 7 years, and currently have a stable with 2 long term submissives.
        </Typography>
        <Typography variant={'body1'}>
          My style is Sadistic with a touch of sweet, and I&apos;m a PRICK (&quot;Personal Responsibility Informed Consensual Kink&quot;) practictioner. 
          This means I require you to have a clear understanding of your own limits and concise negotiations where you communicate them and your safewords 
          to me.
        </Typography>
        <Typography variant={'body1'}>
          If you approach, I expect you to demonstrate who you are as a submissive: I want to see intention, eagerness, and clear communication. 
          I will NOT respond to demands.
        </Typography>
        <Typography variant={'h5'} textAlign={'center'} fontWeight={'bold'}>
          Your safety and my discretion are the top two priorities.
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

const HeadShot = styled('img')`
  height: auto;
  width: 45%;
  @media (max-width: 900px) {
    width: 85%;
  }
`;
