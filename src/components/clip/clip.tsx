import React from 'react';
import {
  Card, CardActionArea, CardMedia, CardActions,
  Typography, Button,
} from '@material-ui/core';
import useStyles from './clip.styles';

interface ClipProps {
  title: string,
  thumbnail: string,
}

const Clip: React.FC<ClipProps> = ({ title, thumbnail }: ClipProps) => {
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

export default Clip;
