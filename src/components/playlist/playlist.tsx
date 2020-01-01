import React, { useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import PlaylistSelect from './playlist-select';
import Clip from '../clip';
import useStyles from './playlist.styles';

const formClip = (item: any): IClip => ({
  id: item.id,
  title: item.snippet.title,
  thumbnail: item.snippet.thumbnails.default.url,
});

interface PlaylistProps {
  title: string,
  clipCount: number,
  id: string,
}

const Playlist: React.FC<PlaylistProps> = ({ title, clipCount, id }: PlaylistProps) => {
  const [clips, setClips] = useState<IClip[]>([]);
  const classes = useStyles();

  useEffect(() => {
    window.gapi.client.youtube.playlistItems
      .list({ part: 'snippet', mine: true, playlistId: id })
      .then((r: any) => JSON.parse(r.body))
      .then((body: any) => body.items)
      .then((items: any[]) => {
        const newClips = items.map(formClip);
        setClips(newClips);
      })
      .catch(window.console.log);
  }, [id]);

  return (
    <section className={classes.playlist}>
      <header>
        <span>{title}</span>
        <span>{clipCount}</span>
      </header>
      <PlaylistSelect />
      <List>
        {
          clips.map(({ title: clipTitle, thumbnail, id: clipId }) => (
            <li key={clipId}><Clip title={clipTitle} thumbnail={thumbnail} /></li>
          ))
        }
      </List>
    </section>
  );
};

export default Playlist;
