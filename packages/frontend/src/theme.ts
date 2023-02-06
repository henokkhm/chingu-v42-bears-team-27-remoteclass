import { Theme } from 'theme-ui';

import '@fontsource/nunito';
import '@fontsource/roboto';

const theme: Theme = {
  config: {
    useColorSchemeMediaQuery: false,
  },
  fonts: {
    body: '"Nunito", sans-serif',
    heading: '"Roboto", sans-serif',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#495464',
    primaryShade: '#424c5a',
    secondary: '#e8e8e8',
    secondaryShade: '#d1d1d1',
    muted: '#f4f4f2',
    error: '#f44336',
    warning: '#ffa726',
    info: '#29b6f6',
    success: '#66bb6a',
    accent: '#664e88',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#171717',
        primaryShade: '#151515',
        secondary: '#444444',
        secondaryShade: '#3d3d3d',
        muted: '#ededed',
        accent: '#da0037',
      },
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    regular: 400,
    medium: 500,
    semibold: 600,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  text: {
    label: {
      color: 'text',
      fontFamily: 'body',
      fontSize: 16,
      fontWeight: 'body',
      lineHeight: 'body',
    },
    link: {
      color: 'text',
      fontFamily: 'body',
      fontSize: 18,
      fontWeight: 'semibold',
      lineHeight: 'auto',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: 48.83,
      fontWeight: 'medium',
      lineHeight: 'heading',
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: 39.06,
      fontWeight: 'medium',
      lineHeight: 'heading',
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: 31.25,
      fontWeight: 'medium',
      lineHeight: 1.3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: 21,
      fontWeight: 'medium',
      lineHeight: 1.3,
    },
  },
  buttons: {
    primary: {
      filled: {
        bg: 'primary',
        color: 'white',
        border: 'none',
        '&:hover': {
          bg: 'primaryShade',
        },
      },
      outlined: {
        bg: 'background',
        color: 'text',
        border: '2px solid currentColor',
        borderColor: 'primary',
        '&:hover': {
          bg: 'secondaryShade',
        },
      },
    },
    danger: {
      bg: 'error',
      color: 'white',
      border: '2px solid currentColor',
      '&:hover': {
        bg: '#dc3c31',
      },
    },
  },
};

export default theme;
