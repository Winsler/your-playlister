
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  footer: {
    flexShrink: 0,
    minHeight: 50,
    backgroundColor: '#3F51B5',
    color: 'white',
  },
}));

export default useStyles;
