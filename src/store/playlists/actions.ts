import { Dispatch } from 'react';
import PLAYLIST_ACTION_TYPES, {
  IPlaylistFailure, IPlaylistFetching, IPlaylistSuccess, TPlaylistAction,
} from './types';


const formPlaylist = (item: IResponsePlaylist): IPlaylistInStore => ({
  id: item.id,
  title: item.snippet.title,
  clipCount: 0,
  clips: [],
});


const playlistsFetch = (): IPlaylistFetching => ({
  type: PLAYLIST_ACTION_TYPES.FETCHING,
});


const playlistsSuccess = (items: TResponsePlaylists): IPlaylistSuccess => ({
  type: PLAYLIST_ACTION_TYPES.SUCCESS,
  payload: items.map(formPlaylist),
});


const playlistsFailure = (e: Error): IPlaylistFailure => ({
  type: PLAYLIST_ACTION_TYPES.FAILURE,
  payload: e.message,
});


// eslint-disable-next-line import/prefer-default-export
export const getUserPlaylists = () => (
  async (dispatch: Dispatch<TPlaylistAction>): Promise<void> => {
    dispatch(playlistsFetch());

    const { youtube } = window.gapi.client;

    try {
      const resp = await youtube.playlists.list({
        part: 'snippet',
        mine: true,
      });

      const { items } = JSON.parse(resp.body);

      dispatch(playlistsSuccess(items));
    } catch (e) {
      window.console.log(e);
      dispatch(playlistsFailure(e));
    }
  }
);
