export default {
  grid: {
    container: '130rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#7695EC',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#999999',
    dark_gray: '#777777',
    light_gray: '#CCCCCC',
    red: '#FF5151',
    green: '#47B960',
    overlay_color: 'rgba(119, 119, 119, 0.8)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    fast: '0.1s ease-in-out',
    default: '0.3s ease-in-out'
  }
} as const
