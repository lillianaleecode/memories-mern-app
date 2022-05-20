import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/dummy_frame.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";

import {getPosts} from './actions/posts';
import useStyles from './styles';

const App = () => {
  
    //const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch (getPosts());
    }, []);

    return (
        <Container maxWidth="lg">
      <AppBar  position="static" color="inherit">
        <Typography variant="h2" align="center">Memories for me</Typography>
        <img src={memories}  />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}> 
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      
    </Container>
    )
}

export default App;