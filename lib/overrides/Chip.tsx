// ----------------------------------------------------------------------

export default function Chip(theme: any) {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          '&$disabled': {
            opacity: 1,
            color: theme.palette.text.disabled,
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        label: { marginTop: -4 },
        outlined: {
          borderColor: theme.palette.grey[50032],
        },
      },
    },
  }
}
