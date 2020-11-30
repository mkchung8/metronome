import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Metronome from "../../components/Metronome/Metronome";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    padding: "50px",
    backgroundColor: "white"
  },
});

function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card>
        <Typography align="center" variant="h2">
          The Metronome App that Nobody Asked For
      </Typography>
      </Card>
      <Metronome />
    </Container>
  )
};

export default Home; 