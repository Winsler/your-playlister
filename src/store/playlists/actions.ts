import { Dispatch } from 'react';
import { batch } from 'react-redux';
import YoutubeApi from 'services/youtube-api';
import * as ClipsActions from 'store/clips/actions';
import { TClipsAction } from 'store/clips/types';
import PLAYLIST_ACTION_TYPES, {
  IPlaylistFailure, IPlaylistFetching, IPlaylistSuccess, TPlaylistAction,
} from './types';


export const playlistsFetch = (): IPlaylistFetching => ({
  type: PLAYLIST_ACTION_TYPES.FETCHING,
});


export const playlistsSuccess = (items: TResponsePlaylists): IPlaylistSuccess => ({
  type: PLAYLIST_ACTION_TYPES.SUCCESS,
  payload: items,
});


export const playlistsFailure = (e: Error): IPlaylistFailure => ({
  type: PLAYLIST_ACTION_TYPES.FAILURE,
  payload: e.message,
});


export const getUserPlaylists = () => (
  async (dispatch: Dispatch<TPlaylistAction>): Promise<void> => {
    dispatch(playlistsFetch());

    const youtubeApi: IYoutubeApi = new YoutubeApi();

    try {
      const items = await youtubeApi.getPlaylists();

      dispatch(playlistsSuccess(items));
    } catch (e) {
      window.console.log(e);
      dispatch(playlistsFailure(e));
    }
  }
);


export const playlistAndClipsFetch = () => (
  dispatch: Dispatch<TPlaylistAction | TClipsAction>,
): void => {
  batch(() => {
    dispatch(playlistsFetch());
    dispatch(ClipsActions.clipsFetch());
  });
};

export const playlistAndClipsFailure = (e: Error) => (
  dispatch: Dispatch<TPlaylistAction | TClipsAction>,
): void => {
  window.console.log(e.message);
  batch(() => {
    dispatch(playlistsFailure(e));
    dispatch(ClipsActions.clipsFailure(e));
  });
};


export const getUserPlaylistsAndClips = () => (
  async (dispatch: Dispatch<TPlaylistAction | TClipsAction>): Promise<void> => {
    playlistAndClipsFetch()(dispatch);

    const youtubeApi: IYoutubeApi = new YoutubeApi();

    try {
      const playlistItems = await youtubeApi.getPlaylists();

      const playlistsIds = playlistItems.map((item) => item.id);

      const clipsItems = await Promise.all(playlistsIds.map((id) => youtubeApi.getClips(id)));

      batch(() => {
        dispatch(playlistsSuccess(playlistItems));
        clipsItems.forEach((item) => dispatch(ClipsActions.clipsSuccess(item)));
      });
    } catch (e) {
      playlistAndClipsFailure(e)(dispatch);
    }
  }
);
