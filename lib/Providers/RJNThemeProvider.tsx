import React, { useMemo } from 'react'
import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'

import CustomGlobalStyles from '../GlobalStyles'
import getPalette from '../palette'
import { customShadows, shadows } from '../shadows'
import typography from '../typography'
import ComponentsOverrides from '../overrides'
import { RJNThemeProviderProps, RUIShapes, RUIThemeOptions } from '../types'

// providers
const RJNThemeProvider = ({ children, primaryColor, secondaryColor }: RJNThemeProviderProps) => {
  const theme = useMemo(() => {
    const palette = getPalette(primaryColor, secondaryColor)
    return createTheme({
      palette,
      shape: {
        borderRadius: 12,
        borderRadiusSm: 16,
        borderRadiusMd: 20,
      } as RUIShapes,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      shadows: shadows(),
      customShadows: customShadows(palette),
      typography: typography,
    } as RUIThemeOptions)
  }, [primaryColor, secondaryColor])
  theme.components = ComponentsOverrides(theme as unknown as RUIThemeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomGlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default RJNThemeProvider
