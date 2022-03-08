import React from 'react'
import useStyles from './styles';
import { Card,CardMedia, Typography, CardContent } from '@material-ui/core';

const Post = ({post}) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={ post.title}  />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.firstName} {post.lastName}</Typography>
        
      </div>
      <CardContent>
      <Typography className= {classes.story} variant='h5' gutterBottom  color='primary'>{post.story}</Typography>
      <Typography className= {classes.city} variant='h5' gutterBottom  color='primary'>{post.city}</Typography>
      </CardContent>
    </Card>
  )
}

export default Post