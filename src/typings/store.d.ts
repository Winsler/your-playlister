interface IBranch {
  meta: {
    isError: boolean;
    isFetching: boolean;
  };
  allEntities: string[];
}

interface IPlaylistEntites {
  [id: string]: IPlaylist;
}

interface IClipsEntities {
  [id: string]: IClip;
}

interface IClipsBranch extends IBranch {
  entities: IClipsEntities;
}

interface IPlaylistsBranch extends IBranch {
  entities: IPlaylistEntites;
}


type TAllClipsEntities = IBranch['allEntities'];
