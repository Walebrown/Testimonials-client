import React, { useState } from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { CreatePost } from "../../redux/postSlice.js";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const classes = useStyles();
  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    story: "",
    role: "Customer",
    city: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreatePost(postData));
    setPostData(postData);
    Navigate("/successpage");
  };

  return (
    <Paper className={classes.paper} >
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <h2 className={classes.title}>Share your amazing story!</h2>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
            className={classes.fileInput}
          />
        </div>

        <TextField
          name="firstName"
          variant="outlined"
          label="First Name"
          fullWidth
          value={postData.firstName}
          onChange={(e) =>
            setPostData({ ...postData, firstName: e.target.value })
          }
        />
        <TextField
          name="lastName"
          variant="outlined"
          label="Last Name"
          fullWidth
          value={postData.lastName}
          onChange={(e) =>
            setPostData({ ...postData, lastName: e.target.value })
          }
        />
        <TextField
          className={classes.story}
          name="Share your story"
          variant="outlined"
          multiline={true}
          rows={5}
          label="Share your story"
          fullWidth
          value={postData.story}
          onChange={(e) => setPostData({ ...postData, story: e.target.value })}
        />
        <TextField
          name="city"
          variant="outlined"
          label="City or Higher Institution(for students)"
          fullWidth
          value={postData.city}
          onChange={(e) => setPostData({ ...postData, city: e.target.value })}
        />

        <Button
          className={classes.buttonSubmit}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Share your story
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
