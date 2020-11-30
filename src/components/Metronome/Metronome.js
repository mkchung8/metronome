import React from "react";
import "./Metronome.css";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles"; 

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  }
}); 

function Metronome() {
  const classes = useStyles(); 
  return (
    <Container className={classes.root}>
      <Card>
        <Typography variant="h1">
          138 BPM
    </Typography>
      </Card>
    </Container>
  );
};

export default Metronome; 