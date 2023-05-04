import React, { useState } from 'react';
import {
  Container,
  Typography,
  makeStyles,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import FileUpload from './components/FileUpload/FileUpload';
import WordDisplay from './components/WordDisplay/WordDisplay';
import Controls from './components/Controls/Controls';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';
import { lightTheme, darkTheme } from './theme';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
  },
  themeToggle: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [startWordIndex, setStartWordIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [wpm, setWpm] = useState(200);

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;
  const classes = useStyles(useTheme(currentTheme));

  const handleThemeToggle = () => {
    setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h4" component="h1" className={classes.title}>
          Word Flasher
                </Typography>

        <Tooltip title="Toggle light/dark theme">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Toggle light/dark theme"
            onClick={handleThemeToggle}
            className={classes.themeToggle}
          >
            {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Tooltip>

        <FileUpload setWords={setWords} />
        <WordDisplay words={words} currentWordIndex={currentWordIndex} />
        <Controls
          playing={playing}
          setPlaying={setPlaying}
          wpm={wpm}
          setWpm={setWpm}
          currentWordIndex={currentWordIndex}
          setCurrentWordIndex={setCurrentWordIndex}
          startWordIndex={startWordIndex}
          setStartWordIndex={setStartWordIndex}
          totalWords={words.length}
        />
        <ProgressIndicator
          currentWordIndex={currentWordIndex}
          totalWords={words.length}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
