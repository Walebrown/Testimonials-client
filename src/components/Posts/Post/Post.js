import React from "react";
import useStyles from "./styles";
// import { Card,CardMedia, Typography, CardContent } from '@material-ui/core';

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.media}>
        <img src={post.selectedFile} alt="customer" />
      </div>
      <div className={classes.fullName}>
        {post.firstName} {post.lastName}
      </div>
      <div className={classes.details}>
        <div className={classes.role}> {post.city} </div>
        <div className={classes.role}> {post.role} </div>
      </div>

      <div className={classes.story}> {post.story} </div>
    </div>
  );
};

export default Post;
