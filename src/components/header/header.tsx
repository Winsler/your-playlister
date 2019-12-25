import React, { useState } from 'react';
import { AppBar, Button } from '@material-ui/core';
import useStyles from './header.styles';


const Header: React.FC = () => {
  const classes = useStyles();
  const [isLogged, setLogged] = useState<boolean>(false);

  const onLogin = ():void => setLogged((prevState: boolean) => !prevState);

  return (
    <AppBar className={classes.header}>
      Hallo
      <Button onClick={onLogin}>
        {isLogged ? 'Выйти' : 'Войти'}
      </Button>
    </AppBar>
  );
};

export default Header;
