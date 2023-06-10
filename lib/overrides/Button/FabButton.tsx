export default function FabButton(theme: any) {
  return {
    MuiFab: {
      defaultProps: {
        color: 'primary',
      },

      styleOverrides: {
        root: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          backgroundColor: theme.palette.grey[300],
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.grey[400],
          },
        },
        primary: {
          boxShadow: theme.customShadows.primary,
        },
      },
    },
  }
}
