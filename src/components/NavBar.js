import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const NavBar = () => {
  return (
    <AppBar variant="elevation" position="fixed">
      <Toolbar>
        <Typography variant="h4">
          <Menu /> Age Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
