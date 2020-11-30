import React from "react";
import "./Metronome.css";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    padding: 50,
    textAlign: "center"
  }
});

function Metronome() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <IconButton>
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
        <IconButton>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>

  );
};

export default Metronome; 