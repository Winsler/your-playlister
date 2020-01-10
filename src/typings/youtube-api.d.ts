interface IYoutubeApi {
  getPlaylists: () => Promise<TResponsePlaylists>;
  getClips: (id: string) => Promis<TResponseClips>;
}
