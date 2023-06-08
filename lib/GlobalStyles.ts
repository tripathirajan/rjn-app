import { GlobalStyles } from '@mui/material'
import { ReactElement } from 'react'

export default function CustomGlobalStyles(): ReactElement {
  return GlobalStyles({
    styles: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        WebkitOverflowScrolling: 'touch',
      },
      body: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
      },
      '#root': {
        width: '100%',
        height: '100%',
      },
      input: {
        '&[type=number]': {
          MozAppearance: 'textfield',
          '&::-webkit-outer-spin-button': {
            margin: 0,
            WebkitAppearance: 'none',
          },
          '&::-webkit-inner-spin-button': {
            margin: 0,
            WebkitAppearance: 'none',
          },
        },
      },
      img: {
        display: 'block',
        maxWidth: '100%',
      },
      ul: {
        margin: 0,
        padding: 0,
      },
    },
  })
}
