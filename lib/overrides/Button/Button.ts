import { RUIThemeOptions } from '../../types'

// ----------------------------------------------------------------------

export default function Button(theme: RUIThemeOptions) {
  const {
    customShadows: { z8, primary, secondary },
    palette,
  } = theme
  const {
    grey,
    action: { hover },
  } = palette as any
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: grey[800],
          boxShadow: z8,
          '&:hover': {
            backgroundColor: grey[400],
          },
        },
        containedPrimary: {
          boxShadow: primary,
        },
        containedSecondary: {
          boxShadow: secondary,
        },
        outlinedInherit: {
          border: `1px solid ${grey[50032]}`,
          '&:hover': {
            backgroundColor: hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: hover,
          },
        },
        disableElevation: {
          boxShadow: 'none',
        },
      },
    },
  }
}
