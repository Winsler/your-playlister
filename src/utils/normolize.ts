import { schema, normalize } from 'normalizr';


export const normalizePlaylists = (items: TResponsePlaylists): IPlaylistEntites => {
  const playlistsSchema = new schema.Entity('playlists', undefined, {
    processStrategy: (value: IResponsePlaylist): IPlaylist => ({
      id: value.id, title: value.snippet.title, clipCount: 0, clips: [],
    }),
  });

  const { entities: { playlists } } = normalize(items, [playlistsSchema]);

  return playlists;
};


export const normalizeClips = (items: TResponseClips): IClipsEntities => {
  const clipsSchema = new schema.Entity('clips', undefined, {
    processStrategy: (value: IResponseClip): IClip => ({
      id: value.id,
      thumbnail: value.snippet.thumbnails.default.url,
      title: value.snippet.title,
    }),
  });

  const { entities: { clips } } = normalize(items, [clipsSchema]);

  return clips;
};
