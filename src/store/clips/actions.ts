import { Dispatch } from 'react';
import CLIPS_ACTION_TYPES, {
  IClipsFailure, IClipsFetching, IClipsSuccess, TClipsAction,
} from './types';


const clipsFetch = (): IClipsFetching => ({
  type: CLIPS_ACTION_TYPES.FETCHING,
});


const clipsSuccess = (items: TResponseClips): IClipsSuccess => ({
  type: CLIPS_ACTION_TYPES.SUCCESS,
  payload: items,
});


const clipsFailure = (e: Error): IClipsFailure => ({
  type: CLIPS_ACTION_TYPES.FAILURE,
  payload: e.message,
});


// eslint-disable-next-line import/prefer-default-export
export const fetchPlaylistClips = (playlistId: string) => (
  async (dispatch: Dispatch<TClipsAction>): Promise<void> => {
    dispatch(clipsFetch());

    const { youtube } = window.gapi.client;

    try {
      const resp = await youtube.playlistItems.list({
        part: 'snippet',
        mine: true,
        playlistId,
      });

      const { items } = JSON.parse(resp.body);

      dispatch(clipsSuccess(items));
    } catch (e) {
      window.console.log(e);
      dispatch(clipsFailure(e));
    }
  }
);
