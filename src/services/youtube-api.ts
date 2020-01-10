export default class YoutubeApi implements IYoutubeApi {
  private readonly clinet = window.gapi.client.youtube;

  getPlaylists = async (): Promise<TResponsePlaylists> => {
    const resp = await this.clinet.playlists.list({
      part: 'snippet',
      mine: true,
    });

    const { items } = JSON.parse(resp.body);

    return items;
  }

  getClips = async (playlistId: string): Promise<TResponseClips> => {
    const resp = await this.clinet.playlistItems.list({
      part: 'snippet',
      mine: true,
      playlistId,
    });

    const { items } = JSON.parse(resp.body);

    return items;
  }
}
