import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fileUpload: {
    marginBottom: theme.spacing(4),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));


const FileUpload = ({ setWords }) => {
  const classes = useStyles();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setWords(e.target.result.split(/\s+/));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className={classes.fileUpload}>
      <input
        accept=".txt"
        id="contained-button-file"
        type="file"
        onChange={handleFileUpload}
        hidden
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload .txt File
        </Button>
      </label>
    </div>
  );
};

export default FileUpload;
