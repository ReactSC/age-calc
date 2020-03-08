import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages'

import NavBar from './NavBar';

const useStyles = makeStyles({
  body:{
    width: '100%',
    minHeight: '100%',
    background: 'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)',
  },
  root: {
    height: '100vh',
    background: ' #cd9cf2 ',
    paddingTop:60,
  }
})

const App = () => {
const classes = useStyles();

  return (
    <div className={classes.body}>
      <Container maxWidth="xs" className={classes.root}>
        <NavBar />
        <Home />

        <Switch>
          {/* <Route path="/about" components={} /> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
