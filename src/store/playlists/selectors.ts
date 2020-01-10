import { createSelector } from 'reselect';
import { TRootState } from 'store';
import { getClipsEntities } from 'store/clips/selectors';
import { getDataFromProps } from 'utils/misc';
import { Selector } from 'react-redux';


export const getPlaylistsBranch = (state: TRootState): IPlaylistsBranch => state.playlistsEntities;


export const getPlaylistEntities = createSelector(
  [getPlaylistsBranch],
  (branch: IPlaylistsBranch): IPlaylistEntites => branch.entities,
);


export const getPlaylists = createSelector(
  [getPlaylistEntities],
  (entities: IPlaylistEntites): TPlaylists => Object.values(entities),
);


export const getPlaylistById = createSelector<
  TRootState,
  TRootState,
  string,
  string,
  IPlaylistEntites,
  string,
  IPlaylist
>(
  [getPlaylistEntities, getDataFromProps],
  (entities: IPlaylistEntites, id: string): IPlaylist => entities[id],
);


export const createSelectorGetUserClipsByPlaylistId = (id: string): Selector<
  TRootState, TClips
> => {
  const getPlaylistByIdBined = (state: TRootState): IPlaylist => getPlaylistById(state, id);
  return createSelector(
    [getPlaylistByIdBined, getClipsEntities],
    (playlist: IPlaylist, clips: IClipsEntities): TClips => (
      playlist.clips.map((clip) => clips[clip])
    ),
  );
};
