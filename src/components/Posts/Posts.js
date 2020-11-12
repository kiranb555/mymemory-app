import React from "react";

import { useSelector } from "react-redux";

import Post from "./Post";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

function Posts({ SetCurrentId }) {
  const posts = useSelector((state) => state.posts);

  console.log(posts, "posts", SetCurrentId);
  const classes = useStyles();
  return (
    <>
      {!posts.length ? (
        <Grid item style={{ textAlign: "center" }}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts &&
            posts.length &&
            posts.map((post, i) => (
              <Grid key={post.id} item xs={12} sm={6} key={i}>
                <Post post={post} SetCurrentId={SetCurrentId} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
}

export default Posts;
