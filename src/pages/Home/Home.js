import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography"; 
import Metronome from "../../components/Metronome/Metronome"; 
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme(); 
  theme.spacing(4); 

function Home() {
  
  return (

    <Container>
      <Typography variant="h2">
        The Metronome App that Nobody Asked For
      </Typography>
      <Metronome />
    </Container>
  )
}

export default Home; 