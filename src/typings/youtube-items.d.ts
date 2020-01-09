interface IYoutubeEntitie {
  id: string;
  title: string;
}

interface IPlaylist extends IYoutubeEntitie {
  clipCount: number;
  clips: string[];
}

interface IClip extends IYoutubeEntitie {
  thumbnail: string;
}


type TClips = IClip[];

type TPlaylists = IPlaylist[];
