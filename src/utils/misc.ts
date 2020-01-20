export const getDataFromProps = <
  StateType, DataType
>(state: StateType, data: DataType): DataType => data;


export const deleteClips = (
  clips: TAllClipsEntities, clipsToDelete: TAllClipsEntities,
): TAllClipsEntities => (
  clips.filter((clip) => !clipsToDelete.includes(clip))
);


export const deleteClipsEntities = (
  entities: IClipsEntities, clipsToDelete: TAllClipsEntities,
): IClipsEntities => {
  const newEntities = {
    ...entities,
  };

  clipsToDelete.forEach((clipToDelete) => {
    delete newEntities[clipToDelete];
  });

  return newEntities;
};


export const getClipParentPlaylist = (
  playlistEntites: IPlaylistEntites, clipId: string,
): string | undefined => {
  let targetPLaylist: string | undefined;

  Object.keys(playlistEntites).forEach((playlistId) => {
    if (!targetPLaylist && playlistEntites[playlistId].clips.includes(clipId)) {
      targetPLaylist = playlistId;
    }
  });

  return targetPLaylist;
};
