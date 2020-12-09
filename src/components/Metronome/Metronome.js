import React from "react";
import "./Metronome.css";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Container, Button, IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    padding: 50,
    textAlign: "center"
  }, 
  sounds: {
    textAlign: "center"
  }
});

const incrButton = () => {
  console.log("increase bpm button click");  
}; 

const decrButton = () => {
  console.log("decrease bpm button click"); 
}; 

const beepSound = () => {
  console.log("beep sound click"); 
}; 

const meowSound = () => {
  console.log("meow sound click"); 
};

const tickSound = () => {
  console.log("tick sound click"); 
}

function Metronome() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={4}>
          <IconButton onClick={()=>{incrButton()}}>
            <KeyboardArrowUpIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Typography variant="h3">
              138 BPM
        </Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <IconButton onClick={()=>{decrButton()}}>
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Container className={classes.sounds}>
        <Button onClick={() => {beepSound()}}>Beep</Button>
        <Button onClick={() => {meowSound()}}>Meow</Button>
        <Button onClick={() => {tickSound()}}>Tick</Button>
      </Container>
    </Container>
  );
};

export default Metronome; 