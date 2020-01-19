import React, { useMemo } from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { createSelectorGetUserClipsByPlaylistId } from 'store/playlists/selectors';
import { withDroppable } from 'hocs';
import PlaylistSelect from './playlist-select';
import Clip from '../clip';
import useStyles from './playlist.styles';


export interface IPlaylistProps {
  title: string;
  clipCount: number;
  id: string;
}


export const Playlist: React.FC<IPlaylistProps> = ({ title, clipCount, id }: IPlaylistProps) => {
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
          clips.map(({ title: clipTitle, thumbnail, id: clipId }, idx) => (
            <li key={clipId}>
              <Clip id={clipId} title={clipTitle} thumbnail={thumbnail} index={idx} />
            </li>
          ))
        }
      </List>
    </section>
  );
};


export default withDroppable(Playlist);
