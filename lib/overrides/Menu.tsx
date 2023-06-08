export default function Menu(theme: any) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&$selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
  }
}
