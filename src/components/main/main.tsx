import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPlaylistsAndClips } from 'store/playlists/actions';
import { getPlaylists } from 'store/playlists/selectors';
import Playlist from '../playlist';
import useStyles from './main.styles';

const Main: React.FC = () => {
  const classes = useStyles();
  const playlists: TPlaylists = useSelector(getPlaylists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylistsAndClips());
  }, [dispatch]);

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
