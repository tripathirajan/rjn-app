export default function Slider(theme: any) {
  return {
    MuiSlider: {
      styleOverrides: {
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled,
        },
      },
    },
  }
}
