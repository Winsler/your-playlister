import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, CardActionArea, CardMedia, CardActions,
  Typography, Button,
} from '@material-ui/core';
import { withDraggabe } from 'hocs';
import { deleteClip } from 'store/clips/actions';
import useStyles from './clip.styles';


export interface IClipProps {
  title: string;
  thumbnail: string;
  id: string;
}


export const Clip: React.FC<IClipProps> = ({ title, thumbnail, id }: IClipProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onDelete = useCallback((): void => {
    dispatch(deleteClip(id));
  }, [id, dispatch]);

  return (
    <Card className={classes.clipCard}>
      <CardActionArea>
        <CardMedia
          className={classes.cardImage}
          image={thumbnail}
          title={title}
        />
        <Typography gutterBottom variant="h6" component="h2">
          {title.slice(0, 20)}
        </Typography>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};


export default withDraggabe<IClipProps>(Clip);
