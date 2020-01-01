import React from 'react';
import { AppBar, Button } from '@material-ui/core';
import useStyles from './header.styles';

const Header: React.FC = () => {
  const classes = useStyles();

  const onClick = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();

    GoogleAuth
      .signIn({
        scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
      })
      .catch(window.console.log);
  };

  return (
    <AppBar className={classes.header}>
      Hallo
      <Button href="/" onClick={onClick}>
        Log In
      </Button>
    </AppBar>
  );
};

export default Header;
