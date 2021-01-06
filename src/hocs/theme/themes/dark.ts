import { createMuiTheme } from '@material-ui/core';

const darkTheme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        backgroundColor: 'darkslateblue',
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#000'
      }
    }
  }
});

export default darkTheme