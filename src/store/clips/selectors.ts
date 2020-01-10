import { createSelector } from 'reselect';
import { TRootState } from 'store';

export const getClipsBranch = (state: TRootState): IClipsBranch => state.clipsEntities;


export const getClipsEntities = createSelector(
  [getClipsBranch],
  (clips: IClipsBranch): IClipsEntities => clips.entities,
);
