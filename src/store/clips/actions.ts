import { Dispatch } from 'react';
import YoutubeApi from 'services/youtube-api';
import CLIPS_ACTION_TYPES, {
  IClipsFailure, IClipsFetching, IClipsSuccess, TClipsAction, IClipMove,
} from './types';


export const clipsFetch = (): IClipsFetching => ({
  type: CLIPS_ACTION_TYPES.FETCHING,
});


export const clipsSuccess = (items: TResponseClips): IClipsSuccess => ({
  type: CLIPS_ACTION_TYPES.SUCCESS,
  payload: items,
});


export const clipsFailure = (e: Error): IClipsFailure => ({
  type: CLIPS_ACTION_TYPES.FAILURE,
  payload: e.message,
});


export const fetchPlaylistClips = (playlistId: string) => (
  async (dispatch: Dispatch<TClipsAction>): Promise<void> => {
    dispatch(clipsFetch());

    const youtubeApi: IYoutubeApi = new YoutubeApi();

    try {
      const items: TResponseClips = await youtubeApi.getClips(playlistId);

      dispatch(clipsSuccess(items));
    } catch (e) {
      window.console.log(e);
      dispatch(clipsFailure(e));
    }
  }
);


export const moveClipToPlaylist = (
  fromId: string,
  toId: string,
  fromPosition: number,
  toPosition: number,
): IClipMove => ({
  type: CLIPS_ACTION_TYPES.MOVE,
  payload: {
    fromId, toId, fromPosition, toPosition,
  },
});
