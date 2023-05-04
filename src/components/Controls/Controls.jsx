import React, { useEffect, useRef } from 'react';
import {
  Button,
  TextField,
  Slider,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(4),
  },
  slider: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  playPauseWpmWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  wpmInput: {
    width: '100px',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));


const Controls = ({
  playing,
  setPlaying,
  wpm,
  setWpm,
  currentWordIndex,
  setCurrentWordIndex,
  startWordIndex,
  setStartWordIndex,
  totalWords,
}) => {
  const classes = useStyles();
  const timerRef = useRef(null);

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const handleWpmChange = (e) => {
    const newWpm = parseInt(e.target.value);
    setWpm(isNaN(newWpm) ? 0 : newWpm);
  };

  const handleSliderChange = (event, newValue) => {
    setStartWordIndex(newValue);
    setCurrentWordIndex(newValue);
  };

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, (60 * 1000) / wpm);
    } else {
      clearInterval(timerRef.current);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [playing, wpm, setCurrentWordIndex]);

  return (
    <div className={classes.controls}>
      <Slider
        value={startWordIndex}
        onChange={handleSliderChange}
        min={0}
        max={totalWords - 1}
        valueLabelDisplay="auto"
        className={classes.slider}
      />
      <div className={classes.playPauseWpmWrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={togglePlayPause}
        >
          {playing ? 'Pause' : 'Play'}
        </Button>
        <TextField
          label="WPM"
          type="number"
          value={wpm}
          onChange={handleWpmChange}
          className={classes.wpmInput}
        />
      </div>
    </div>
  );
};

export default Controls;
