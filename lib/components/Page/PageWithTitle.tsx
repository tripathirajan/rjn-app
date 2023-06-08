import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Box } from '@mui/material'
import { PageWrapperWithTitleProps } from './types'

const PageWithTitle = forwardRef((props: PageWrapperWithTitleProps, ref) => {
  const { children, title = '', ...other } = props

  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  )
})
PageWithTitle.displayName = 'PageWithTitle'

export default PageWithTitle
