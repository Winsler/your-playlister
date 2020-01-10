import React, { useMemo } from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { createSelectorGetUserClipsByPlaylistId } from 'store/playlists/selectors';
import PlaylistSelect from './playlist-select';
import Clip from '../clip';
import useStyles from './playlist.styles';

interface IPlaylistProps {
  title: string;
  clipCount: number;
  id: string;
}


const Playlist: React.FC<IPlaylistProps> = ({ title, clipCount, id }: IPlaylistProps) => {
  const selector = useMemo(() => createSelectorGetUserClipsByPlaylistId(id), [id]);

  const clips: TClips = useSelector(selector);
  const classes = useStyles();


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
