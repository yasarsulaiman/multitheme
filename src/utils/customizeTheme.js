import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const customizeTheme = (theme) => {
  console.log({theme});
  const { mainPrimary,mainColor } = theme;
  console.log({mainPrimary, mainColor});
  return createTheme({
    palette:{
      primary: {
        main: mainPrimary
      },
      common: {
        color: mainColor
      }
    }
  })
}