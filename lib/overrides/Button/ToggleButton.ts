export default function ToggleButton(theme: any) {
  const isLight = theme.palette.mode === 'light'

  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[50080],
          border: `solid 1px ${theme.palette.grey[50032]}`,
          '&$selected': {
            color: theme.palette.grey[isLight ? 600 : 0],
            backgroundColor: theme.palette.action.selected,
          },
          '&$disabled': {
            color: theme.palette.action.disabledBackground,
          },
        },
      },
    },
  }
}
