import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Pagination(theme: any) {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&$selected': {
            fontWeight: theme.typography.fontWeightBold,
          },
        },
        textPrimary: {
          '&$selected': {
            color: theme.palette.primary.main,
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.24),
            },
          },
        },

        outlined: {
          border: `1px solid ${theme.palette.grey[50032]}`,
        },
        outlinedPrimary: {
          '&$selected': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
          },
        },
      },
    },
  }
}
