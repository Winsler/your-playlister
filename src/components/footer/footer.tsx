import React from 'react';
import useStyles from './footer.styles';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      FOOTER
    </footer>
  );
};

export default Footer;
