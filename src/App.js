import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import useStyles from "./styles";

function App() {
  const [currentId, SetCurrentId] = useState(0);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Memories App
        </Typography>
        {/* <img
          className={classes.image}
          src={Memories}
          alt="memories app img"
          height="60"
        /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts currentId={currentId} SetCurrentId={SetCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} SetCurrentId={SetCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
