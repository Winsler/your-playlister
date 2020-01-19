import { useCallback, Dispatch } from 'react';
import { IClipMove } from 'store/clips/types';
import { DropResult } from 'react-beautiful-dnd';
import { moveClipToPlaylist as moveClipToPlaylistDefault } from 'store/clips/actions';


export const moveClipToPlaylist = ({ source, destination }: DropResult): IClipMove | undefined => {
  if (!destination) {
    return undefined;
  }

  const { droppableId: fromId, index: fromPosition } = source;
  const { droppableId: toId, index: toPosition } = destination;

  return moveClipToPlaylistDefault(fromId, toId, fromPosition, toPosition);
};


export const useGetClipMoveHandler = (dispatch: Dispatch<IClipMove>): (e: DropResult) => void => (
  useCallback((dropEvent: DropResult): void => {
    const action = moveClipToPlaylist(dropEvent);
    if (action) {
      dispatch(action);
    }
  }, [dispatch])
);
