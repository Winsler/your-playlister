interface IBranch {
  meta: {
    isError: boolean;
    isFetching: boolean;
  };
  allEntities: string[];
}

interface IClipsBranch extends IBranch {
  entities: IClipsEntities;
}

interface IPlaylistsBranch extends IBranch {
  entities: IPlaylistEntites;
}

interface IPlaylistEntites {
  [id: string]: IPlaylist;
}

interface IClipsEntities {
  [id: string]: IClip;
}
