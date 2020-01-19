import React from 'react';
import {
  Card, CardActionArea, CardMedia, CardActions,
  Typography, Button,
} from '@material-ui/core';
import { withDraggabe } from 'hocs';
import useStyles from './clip.styles';


export interface IClipProps {
  title: string;
  thumbnail: string;
}


export const Clip: React.FC<IClipProps> = ({ title, thumbnail }: IClipProps) => {
  const classes = useStyles();

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
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};


export default withDraggabe<IClipProps>(Clip);
