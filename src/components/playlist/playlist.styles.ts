
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  playlist: {
    border: '1px solid black',
    padding: '0 1rem',
    width: 'fit-content',
    maxHeight: 600,
    overflowY: 'scroll',
    '&:not(:last-child)': {
      marginRight: '1rem',
    },
  },
}));

export default useStyles;
