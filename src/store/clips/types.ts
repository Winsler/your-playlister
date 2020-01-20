enum CLIPS_ACTION_TYPES {
  FETCHING = 'CLIPS_FETCHING',
  SUCCESS = 'CLIPS_SUCCESS',
  FAILURE = 'CLIPS_FAILURE',
  MOVE = 'CLIPS_MOVE',
  DELETE = 'CLIPS_DELETE',
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

export interface IClipsMove {
  type: typeof CLIPS_ACTION_TYPES.MOVE;
  payload: {
    fromId: string;
    toId: string;
    fromPosition: number;
    toPosition: number;
  };
}

export interface IClipsDelete {
  type: typeof CLIPS_ACTION_TYPES.DELETE;
  payload: IPlaylist['clips'];
}

export type TClipsAction = (
  IClipsFetching | IClipsSuccess | IClipsFailure | IClipsMove | IClipsDelete
);
