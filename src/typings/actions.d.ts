interface IServerResponseAction<actionType = string> {
  type: actionType;
  payload: {
    clips?: TClips;
    playlists?: TPlaylists;
    error?: string;
  };
  error?: true;
}


interface IResponseClip {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
    playlistId: string;
  };
}

type TResponseClips = IResponseClip[];


interface IResponsePlaylist {
  id: string;
  snippet: {
    title: string;
  };
}

type TResponsePlaylists = IResponsePlaylist[];
