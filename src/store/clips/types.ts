enum CLIPS_ACTION_TYPES {
  FETCHING = 'CLIPS_FETCHING',
  SUCCESS = 'CLIPS_SUCCESS',
  FAILURE = 'CLIPS_FAILURE',
  MOVE = 'CLIPS_MOVE',
}

export default CLIPS_ACTION_TYPES;

export interface IClipsFetching {
  type: typeof CLIPS_ACTION_TYPES.FETCHING;
}

export interface IClipsSuccess {
  type: typeof CLIPS_ACTION_TYPES.SUCCESS;
  payload: TResponseClips;
}

export interface IClipsFailure {
  type: typeof CLIPS_ACTION_TYPES.FAILURE;
  payload: string;
}

export interface IClipMove {
  type: typeof CLIPS_ACTION_TYPES.MOVE;
  payload: {
    fromId: string;
    toId: string;
    fromPosition: number;
    toPosition: number;
  };
}

export type TClipsAction = IClipsFetching | IClipsSuccess | IClipsFailure | IClipMove;
