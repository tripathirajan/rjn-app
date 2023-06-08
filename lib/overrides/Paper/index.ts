export default function Paper(theme: any) {
  const { spacing } = theme
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 8,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          padding: spacing(0.5),
        },
      },
    },
  }
}
