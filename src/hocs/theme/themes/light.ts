import { createMuiTheme } from '@material-ui/core'

const darkTheme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#000'
      }
    },
    MuiMenu: {
      paper: {
        backgroundColor: '#556df6',
      }
    }
  },
});

export default darkTheme