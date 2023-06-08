// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Radio(_theme: any) {
  return {
    MuiRadio: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
  }
}
