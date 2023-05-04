import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wordDisplay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px', // Increase the height
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px', // Add border radius
    boxShadow: theme.shadows[3], // Add box shadow
    marginBottom: theme.spacing(4),
    fontSize: '2rem', // Increase the font size
    fontWeight: theme.typography.fontWeightBold, // Add font weight
    color: theme.palette.text.primary,
  },
}));


const WordDisplay = ({ words, currentWordIndex }) => {
  const classes = useStyles();
  return (
    <div className={classes.wordDisplay}>
      <Typography variant="h4">
        {words.length > 0 ? words[currentWordIndex] : ''}
      </Typography>
    </div>
  );
};

export default WordDisplay;

