import { Palette, PaletteOptions } from '@mui/material';
import { indigo, grey, cyan, green, red } from '@mui/material/colors';

export const palette:PaletteOptions  = {
  text: {
    primary: grey[50],
    secondary: grey[500],
  },
  primary: {
    main: indigo[400],
  },
  background: {
    default: grey[900],
  },
  info: {
    main: cyan[400]
  },
  success: {
    main: green[400]
  },
  error: {
    main: red[500]
  }
};
