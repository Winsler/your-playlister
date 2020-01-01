import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

const PlaylistSelect:React.FC = () => (
  <Select value="new">
    <MenuItem value="new">Create new playlist</MenuItem>
  </Select>
);

export default PlaylistSelect;
