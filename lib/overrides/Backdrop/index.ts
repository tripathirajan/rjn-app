import { PaletteOptions, alpha } from '@mui/material/styles'
import { RUIThemeOptions } from '../../types'

// ----------------------------------------------------------------------

export default function Backdrop(theme: RUIThemeOptions) {
  const { palette } = theme
  const { grey } = palette as PaletteOptions
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)', // Fix on Mobile
          backgroundColor: grey !== undefined ? alpha(grey[500] || '#fcfcfc', 0.2) : '',
          '&.MuiBackdrop-invisible': {
            background: 'transparent !important',
            backdropFilter: 'blur(0) !important',
            WebkitBackdropFilter: 'blur(0)!important',
          },
        },
      },
    },
  }
}
