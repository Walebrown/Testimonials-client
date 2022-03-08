import React, { useEffect } from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { CircularProgress, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchPost } from '../../redux/postSlice';
import { useSelector } from 'react-redux';


const Posts = () => {
  const dispatch = useDispatch();
  
  const classes = useStyles();
  const {posts} = useSelector((state) => state.post);
  console.log(posts)

  useEffect(() => {
      dispatch(fetchPost())
  },[dispatch])

  return ( 
    !posts.length? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3} >
        {posts.map((post) => (
            <Grid  key={ post._id}item xm={12} sm={4} > 
              <Post post = {post} />
            </Grid> 
          ))}


      </Grid>
    )
  );
}

export default Posts