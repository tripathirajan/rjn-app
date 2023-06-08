import { deepOrange } from '@mui/material/colors'
import { alpha } from '@mui/material/styles'
deepOrange
const _createGradient = (color1: string, color2: string) => {
  return `linear-gradient(to bottom, ${color1}, ${color2})`
}

// white
export const WHITE = '#FFFFFF'

// blue
export const BLUE_MAIN = '#5A81FA'
export const BLUE_DARK = '#2C3D8F'
export const BLUE_LIGHT = '#CDDEFF'
export const BLUE_LIGHTER = '#f2f2f2' //'#f3f6f9'; //'#F2F5FF';

//black
export const BLACK = '#1F1F1F'
export const BLACK_LIGHT = '#6A6E83'
export const BLACK_LIGHTER = '#A8B1CE'
export const BLACK_GREY = '#f8f9fd'

export const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  5008: alpha('#919EAB', 0.08),
  50012: alpha('#919EAB', 0.12),
  50016: alpha('#919EAB', 0.16),
  50024: alpha('#919EAB', 0.24),
  50032: alpha('#919EAB', 0.32),
  50048: alpha('#919EAB', 0.48),
  50056: alpha('#919EAB', 0.56),
  50080: alpha('#919EAB', 0.8),
}

/**
 * primary color
 */
export const PRIMARY: any = {
  lighter: '#D1E9FC',
  light: '#76B0F1',
  main: '#00005C',
  dark: '#103996',
  darker: '#061B64',
  contrastText: '#fff',
}

/**
 * secondary color
 */
export const SECONDARY: any = {
  lighter: '#fff3e0',
  light: '#ffe0b2',
  main: '#ef6c00',
  dark: '#e65100',
  darker: '#ff6d00',
  contrastText: '#fff',
}

export const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
}

export const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
}

export const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
}

export const ERROR = {
  lighter: '#f8bbd0',
  light: '#f06292',
  main: '#e91e63',
  dark: '#d81b60',
  darker: '#c2185b',
  contrastText: '#fff',
}

export const getGradientColor = (primaryColor: any) => {
  return {
    primary: _createGradient(primaryColor?.light || PRIMARY.light, primaryColor?.main || PRIMARY.main),
    info: _createGradient(INFO.light, INFO.main),
    success: _createGradient(SUCCESS.light, SUCCESS.main),
    warning: _createGradient(WARNING.light, WARNING.main),
    error: _createGradient(ERROR.light, ERROR.main),
  }
}
