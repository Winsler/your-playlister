import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPlaylistsAndClips } from 'store/playlists/actions';
import { getPlaylists } from 'store/playlists/selectors';
import { DragDropContext } from 'react-beautiful-dnd';
import { useGetClipMoveHandler } from 'hooks/get-clipMove-handler';
import Playlist from '../playlist';
import useStyles from './main.styles';


const Main: React.FC = () => {
  const classes = useStyles();
  const playlists: TPlaylists = useSelector(getPlaylists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylistsAndClips());
  }, [dispatch]);

  const onDragEnd = useGetClipMoveHandler(dispatch);

  return (
    <main className={classes.main}>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          playlists.map(({ id, title, clipCount }) => (
            <Playlist key={id} id={id} title={title} clipCount={clipCount} />
          ))
        }
      </DragDropContext>
    </main>
  );
};


export default Main;
