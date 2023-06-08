import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Select(_theme: any) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreIcon,
      },

      styleOverrides: {
        root: {},
      },
    },
  }
}
