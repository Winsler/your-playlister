import CLIPS_ACTION_TYPES, { TClipsAction } from 'store/clips/types';
import PLAYLIST_ACTION_TYPES, { TPlaylistAction } from './types';

const defaultState: IPlaylistsBranch = {
  meta: {
    isError: false,
    isFetching: false,
  },
  entities: {},
  allEntities: [],
};

type TAction = TPlaylistAction | TClipsAction;

const reducer = (state = defaultState, action: TAction): IPlaylistsBranch => {
  switch (action.type) {
    case PLAYLIST_ACTION_TYPES.FETCHING:
      return {
        ...state,
        meta: {
          isError: false,
          isFetching: true,
        },
      };

    case PLAYLIST_ACTION_TYPES.FAILURE:
      return {
        ...state,
        meta: {
          isError: true,
          isFetching: false,
        },
      };

    case PLAYLIST_ACTION_TYPES.SUCCESS:
      return {
        meta: {
          isError: false,
          isFetching: false,
        },
        allEntities: action.payload.map((playlist) => playlist.id),
        entities: action.payload.reduce((acc, playlist) => ({
          ...acc,
          [playlist.id]: playlist,
        }), {}),
      };

    case CLIPS_ACTION_TYPES.SUCCESS: {
      const { playlistId } = action.payload;
      const clipIds: string[] = action.payload.clips.map((item: IClip) => item.id);

      return {
        ...state,
        entities: {
          ...state.entities,
          [playlistId]: {
            ...state.entities[playlistId],
            clips: clipIds,
            clipCount: clipIds.length,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
