import { ThemeOptions } from '@mui/material'
import { ShapeOptions } from '@mui/system'

// types
export interface RJNThemeProviderProps {
  children: React.JSX.Element
  primaryColor?: any
  secondaryColor?: any
}
export interface RUIShapes extends ShapeOptions {
  borderRadiusSm?: number
  borderRadiusMd?: number
}
export interface CustomShadowsType {
  z1: string
  z4: string
  z8: string
  z12: string
  z16: string
  z20: string
  z24: string
  info: string
  primary: string
  secondary: string
  success: string
  warning: string
  error: string
  card: string
  dialog: string
  dropdown: string
}
export interface RUIThemeOptions extends ThemeOptions {
  customShadows: CustomShadowsType
  shape: RUIShapes
}
