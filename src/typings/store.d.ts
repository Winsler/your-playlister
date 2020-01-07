interface IBranch {
  meta: {
    isError: boolean;
    isFetching: boolean;
  };
  allEntities: string[];
}

interface IClipsEntities {
  [id: string]: IClip;
}

interface IClipsBranch extends IBranch {
  entities: IClipsEntities;
}

interface IPlaylistInStore extends IPlaylist {
  clips: string[];
}

interface IPlaylistsBranch extends IBranch {
  entities: {
    [id: string]: IPlaylistInStore;
  };
}
