import {
  BLACK,
  WHITE,
  PRIMARY,
  SECONDARY,
  GREY,
  INFO,
  SUCCESS,
  ERROR,
  WARNING,
  BLUE_LIGHTER,
  BLACK_LIGHT,
  BLACK_LIGHTER,
  getGradientColor,
} from '../color'

const getPalette = (primaryColor?: any, secondaryColor?: any) => ({
  common: { black: BLACK, white: WHITE },
  primary: primaryColor ? { ...primaryColor } : { ...PRIMARY },
  secondary: secondaryColor ? { ...secondaryColor } : { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  divider: GREY[50024],
  gradients: getGradientColor(primaryColor),
  text: {
    primary: BLACK,
    secondary: BLACK_LIGHT,
    disabled: BLACK_LIGHTER,
  },
  background: { paper: WHITE, default: WHITE, neutral: BLUE_LIGHTER },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
})

export default getPalette
