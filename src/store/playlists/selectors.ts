import { createSelector } from 'reselect';
import { TRootState } from 'store';
import { getClips } from 'store/clips/selectors';

// TODO
const getDataFromProps = (state: TRootState, id: any): any => id;

export const getPlaylistsBranch = (state: TRootState): IPlaylistsBranch => state.playlistsEntities;

export const getPlaylists = createSelector(
  [getPlaylistsBranch],
  (playlists: IPlaylistsBranch): TPlaylists => Object.values(playlists.entities),
);

export const getPlaylistById = createSelector(
  [getPlaylistsBranch, getDataFromProps],
  (playlists: IPlaylistsBranch, id: string): IPlaylist => playlists.entities[id],
);

export const getUserClipsByPlaylistId = createSelector(
  [getPlaylistById, getClips],
  (playlist: IPlaylist, clips: IClipsEntities): TClips => (
    playlist.clips.map((clipId) => clips[clipId])
  ),
);
