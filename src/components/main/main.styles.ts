import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  main: {
    flexGrow: 1,
    display: 'flex',
    padding: '0.5rem 1rem',
  },
}));

export default useStyles;
