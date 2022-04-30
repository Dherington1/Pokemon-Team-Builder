// import React from 'react'

import * as React from 'react';
import {Component} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Home extends Component {

  render () {
    
    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
        <h1>Pokemon Team Builder</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Link to='/Gen1'>
              <Item><img src='/images/game/lgpe.png' alt='game'  /></Item>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to='/Gen2'>
              <Item><img src='/images/game/xy.png' alt='game'  /></Item>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to='/Gen3'>
              <Item><img src='/images/game/xy.png' alt='game'  /></Item>
            </Link>
          </Grid>
  
          <Grid item xs={4}>
            <Link to='/Gen4'>
              <Item><img src='/images/game/xy.png' alt='game'  /></Item>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to='/Gen5'>
              <Item><img src='/images/game/xy.png' alt='game'  /></Item>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to='/Gen6'>
              <Item><img src='/images/game/xy.png' alt='game'  /></Item>
            </Link>
          </Grid>
  
          <Grid item xs={4}>
            <Link to='/Gen7'>
              <Item><img src='/images/game/xy.png' alt='game'  /></Item>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to='/Gen8'>
              <Item><img src='/images/game/xy.png' alt='game'  /></Item>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to='/Gen9'>
              <Item><img src='/images/game/xy.png' alt='game'  /></Item>
            </Link>
          </Grid>
  
  
        </Grid>
      </Box>
      </>
    );
  }
}
export default Home