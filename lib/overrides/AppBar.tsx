export default function AppBar(theme: any) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.z8,
        },
        colorDefault: {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  }
}
