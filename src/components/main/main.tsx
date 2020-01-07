import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPlaylists } from 'store/playlists/actions';
import * as PlaylistSelectors from 'store/playlists/selectors';
import Playlist from '../playlist';
import useStyles from './main.styles';

const Main: React.FC = () => {
  const classes = useStyles();
  const playlists: IPlaylist[] = useSelector(PlaylistSelectors.getPlaylists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylists());
  }, []);

  return (
    <main className={classes.main}>
      {
        playlists.map(({ id, title, clipCount }) => (
          <Playlist key={id} id={id} title={title} clipCount={clipCount} />
        ))
      }
    </main>
  );
};

export default Main;
