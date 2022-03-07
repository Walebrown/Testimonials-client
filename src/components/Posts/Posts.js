import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import useStyles from './styles';
import { CircularProgress, Grid } from '@material-ui/core';


const Posts = () => {
  
  const classes = useStyles();
  const {posts} = useSelector((state) => state.post);
  console.log(posts)

  return ( 
    !posts.length? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3} >
        {posts.map((post) => (
            <Grid  key={ post._id}item xm={12} sm={6} > 
              <Post post = {post} />
            </Grid> 
          ))}


      </Grid>
    )
  );
}

export default Posts