import React, { useState, useEffect } from 'react';
import Playlist from '../playlist';
import useStyles from './main.styles';

const formPlaylist = (item: any): IPlaylist => ({
  id: item.id,
  title: item.snippet.title,
  clipCount: 0,
});

const Main: React.FC = () => {
  const [playlists, setPlalists] = useState<IPlaylist[]>([]);
  const classes = useStyles();

  useEffect(() => {
    window.gapi.client.youtube.playlists
      .list({ part: 'snippet', mine: true })
      .then((r: any) => JSON.parse(r.body))
      .then((body: any) => body.items)
      .then((items: any[]) => {
        const newPlaylists = items.map(formPlaylist);
        setPlalists(newPlaylists);
      })
      .catch(window.console.log);
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
