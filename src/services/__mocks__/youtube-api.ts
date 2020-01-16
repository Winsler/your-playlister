export default class YoutubeApi implements IYoutubeApi {
  static responsePlaylists: TResponsePlaylists = [
    {
      id: '1',
      snippet: {
        title: 'testTitle',
      },
    },
  ]

  static responseClips: TResponseClips = [{
    id: 'clips1',
    snippet: {
      playlistId: 'someId',
      title: 'clipTestTitle',
      thumbnails: {
        default: {
          url: 'testUrl',
        },
      },
    },
  }];

  static errorMsg = 'some test error message';


  getPlaylists = async (): Promise<TResponsePlaylists> => new Promise((res) => {
    res(YoutubeApi.responsePlaylists);
  })


  getClips = async (playlistId: string): Promise<TResponseClips> => {
    if (playlistId === 'error') {
      throw new Error(YoutubeApi.errorMsg);
    }

    return new Promise((res) => {
      res(YoutubeApi.responseClips);
    });
  }
}
