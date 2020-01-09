import { createSelector } from 'reselect';
import { TRootState } from 'store';
import { getClipsEntities } from 'store/clips/selectors';


const getDataFromProps = <T>(state: TRootState, data: T): T => data;

export const getPlaylistsBranch = (state: TRootState): IPlaylistsBranch => state.playlistsEntities;

export const getPlaylists = createSelector(
  [getPlaylistsBranch],
  (plalists: IPlaylistsBranch): TPlaylists => Object.values(plalists.entities),
);


export const getPlaylistById = createSelector<
  TRootState,
  TRootState,
  never,
  string,
  IPlaylistsBranch,
  string,
  IPlaylist
>(
  [getPlaylistsBranch, getDataFromProps],
  (playlists: IPlaylistsBranch, id: string): IPlaylist => playlists.entities[id],
);

export const getUserClipsByPlaylistId = createSelector(
  [getPlaylistById, getClipsEntities],
  (playlist: IPlaylist, clips: IClipsEntities): TClips => (
    playlist.clips.map((clipId) => clips[clipId])
  ),
);
