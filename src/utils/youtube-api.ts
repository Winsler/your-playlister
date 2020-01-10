export const getClips = async (playlistId: string): Promise<TResponseClips> => {
  const { youtube } = window.gapi.client;

  const resp = await youtube.playlistItems.list({
    part: 'snippet',
    mine: true,
    playlistId,
  });

  const { items } = JSON.parse(resp.body);

  return items;
};


export const getPlaylists = async (): Promise<TResponsePlaylists> => {
  const { youtube } = window.gapi.client;


  const resp = await youtube.playlists.list({
    part: 'snippet',
    mine: true,
  });

  const { items } = JSON.parse(resp.body);

  return items;
};
