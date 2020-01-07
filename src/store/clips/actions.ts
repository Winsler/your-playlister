import { Dispatch } from 'react';
import CLIPS_ACTION_TYPES, {
  IClipsFailure, IClipsFetching, IClipsSuccess, TClipsAction,
} from './types';


const formClip = (item: IResponseClip): IClip => ({
  id: item.id,
  title: item.snippet.title,
  thumbnail: item.snippet.thumbnails.default.url,
});


const clipsFetch = (): IClipsFetching => ({
  type: CLIPS_ACTION_TYPES.FETCHING,
});


const clipsSuccess = (items: TResponseClips): IClipsSuccess => ({
  type: CLIPS_ACTION_TYPES.SUCCESS,
  payload: {
    clips: items.map(formClip),
    playlistId: items[0].snippet.playlistId,
  },
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

      // window.console.log(items);

      dispatch(clipsSuccess(items));
    } catch (e) {
      window.console.log(e);
      dispatch(clipsFailure(e));
    }
  }
);
