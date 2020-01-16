import YoutubeApi from 'services/__mocks__/youtube-api';
import * as ClipsActions from './actions';
import CLIPS_ACTION_TYPES, { IClipsSuccess, IClipsFetching, IClipsFailure } from './types';

jest.mock('services/youtube-api');

describe('clipsFetch action creator', () => {
  it('should return correct action', () => {
    const action: IClipsFetching = {
      type: CLIPS_ACTION_TYPES.FETCHING,
    };

    expect(ClipsActions.clipsFetch()).toEqual(action);
  });
});


describe('clpisSuccess action creator', () => {
  let items: TResponseClips;
  let action: IClipsSuccess;

  beforeEach(() => {
    items = [{
      id: '1',
      snippet: {
        playlistId: '23',
        thumbnails: {
          default: {
            url: '45',
          },
        },
        title: 'testTitle',
      },
    }];

    action = {
      type: CLIPS_ACTION_TYPES.SUCCESS,
      payload: items,
    };
  });

  it('should return correct action', () => {
    expect(ClipsActions.clipsSuccess(items)).toEqual(action);
  });

  it('should not create a new payload data', () => {
    expect(ClipsActions.clipsSuccess(items).payload).toBe(items);
  });
});


describe('clipsFailure action creator', () => {
  it('should return correct action', () => {
    const errorMsg = 'some random error';
    const error = new Error(errorMsg);

    const action: IClipsFailure = {
      type: CLIPS_ACTION_TYPES.FAILURE,
      payload: errorMsg,
    };

    expect(ClipsActions.clipsFailure(error)).toEqual(action);
  });
});

describe('fetchPlaylistClips action creator', () => {
  it('should correct dispatch success fetch', async () => {
    const playlistId = '';
    const dispatch = jest.fn();

    await ClipsActions.fetchPlaylistClips(playlistId)(dispatch);

    expect(dispatch).toBeCalledTimes(2);

    expect(dispatch.mock.calls[0][0]).toEqual({ type: CLIPS_ACTION_TYPES.FETCHING });

    expect(dispatch.mock.calls[1][0]).toEqual({
      type: CLIPS_ACTION_TYPES.SUCCESS,
      payload: YoutubeApi.responseClips,
    });
  });

  it('should correct dispatch failure fetch', async () => {
    const playlistId = 'error';
    const dispatch = jest.fn();

    await ClipsActions.fetchPlaylistClips(playlistId)(dispatch);

    expect(dispatch).toBeCalledTimes(2);

    expect(dispatch.mock.calls[0][0]).toEqual({ type: CLIPS_ACTION_TYPES.FETCHING });

    expect(dispatch.mock.calls[1][0]).toEqual({
      type: CLIPS_ACTION_TYPES.FAILURE,
      payload: YoutubeApi.errorMsg,
    });
  });
});
