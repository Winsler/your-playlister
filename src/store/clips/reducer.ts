import CLIPS_ACTION_TYPES, { TClipsAction } from './types';

const defaultState: IClipsBranch = {
  meta: {
    isError: false,
    isFetching: false,
  },
  entities: {},
  allEntities: [],
};


const reducer = (state = defaultState, action: TClipsAction): IClipsBranch => {
  switch (action.type) {
    case CLIPS_ACTION_TYPES.FETCHING:
      return {
        ...state,
        meta: {
          isFetching: true,
          isError: false,
        },
      };

    case CLIPS_ACTION_TYPES.FAILURE:
      return {
        ...state,
        meta: {
          isFetching: false,
          isError: true,
        },
      };

    case CLIPS_ACTION_TYPES.SUCCESS: {
      const newEntities = action.payload.clips.reduce((acc, clip) => ({
        ...acc,
        [clip.id]: clip,
      }), {});

      return {
        allEntities: action.payload.clips.map((clip) => clip.id),
        meta: {
          isError: false,
          isFetching: false,
        },
        entities: {
          ...state.entities,
          ...newEntities,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
