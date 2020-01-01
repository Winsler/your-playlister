
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  clipCard: {
    padding: '1rem',
    width: 120,
    boxSizing: 'content-box',
    margin: '0.5rem 0',
  },
  cardImage: {
    width: 120,
    height: 90,
  },
}));

export default useStyles;
