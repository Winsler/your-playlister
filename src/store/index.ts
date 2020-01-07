import { combineReducers } from 'redux';
import playlistsReducer from './playlists/reducer';
import clipsReducer from './clips/reducer';


const rootReducer = combineReducers({
  playlistsEntities: playlistsReducer,
  clipsEntities: clipsReducer,
});

export default rootReducer;


export type TRootState = ReturnType<typeof rootReducer>;
