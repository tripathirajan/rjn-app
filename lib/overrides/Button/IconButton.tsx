export default function IconButton(theme: any) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: theme.palette.grey[5008],
          },
        },
      },
    },
  }
}
