import React from 'react';
import Playlist from '../playlist';
import useStyles from './main.styles';

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Playlist />
    </main>
  );
};

export default Main;
