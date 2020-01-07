import React, { useEffect } from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylistClips } from 'store/clips/actions';
import * as ClipsSelectors from 'store/playlists/selectors';
import { TRootState } from 'store';
import PlaylistSelect from './playlist-select';
import Clip from '../clip';
import useStyles from './playlist.styles';

interface IPlaylistProps {
  title: string;
  clipCount: number;
  id: string;
}


const Playlist: React.FC<IPlaylistProps> = ({ title, clipCount, id }: IPlaylistProps) => {
  const dispatch = useDispatch();
  const selector = (state: TRootState): TClips => (
    ClipsSelectors.getUserClipsByPlaylistId(state, id)
  );
  const clips: TClips = useSelector(selector);
  const classes = useStyles();


  useEffect(() => {
    dispatch(fetchPlaylistClips(id));
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
