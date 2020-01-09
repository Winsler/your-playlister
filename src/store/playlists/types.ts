enum PLAYLIST_ACTION_TYPES {
  FETCHING = 'PLAYLIST_FETCHING',
  SUCCESS = 'PLAYLIST_SUCCESS',
  FAILURE = 'PLAYLIST_FAILURE',
}

export default PLAYLIST_ACTION_TYPES;

export interface IPlaylistFetching {
  type: typeof PLAYLIST_ACTION_TYPES.FETCHING;
}

export interface IPlaylistSuccess {
  type: typeof PLAYLIST_ACTION_TYPES.SUCCESS;
  payload: TResponsePlaylists;
}

export interface IPlaylistFailure {
  type: typeof PLAYLIST_ACTION_TYPES.FAILURE;
  payload: string;
}

export type TPlaylistAction = IPlaylistFetching | IPlaylistSuccess | IPlaylistFailure;
