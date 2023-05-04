import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  progressIndicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
  },
}));


const ProgressIndicator = ({ currentWordIndex, totalWords }) => {
  const classes = useStyles();
  const progress = (currentWordIndex / totalWords) * 100;

  return (
    <div className={classes.progressIndicator}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

export default ProgressIndicator;
