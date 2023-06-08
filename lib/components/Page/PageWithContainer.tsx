import React, { forwardRef } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { default as PageWithTitle } from './PageWithTitle'
import { PageWrapperWithContainerProps } from './types'
import { default as IconCmp } from '../icons'
import { AppIconButton } from '../Buttons'

const PageWithContainer = forwardRef((props: PageWrapperWithContainerProps, ref) => {
  const { children, title = '', icon = '', legend, onFilterClick, pageActions } = props

  return (
    <PageWithTitle title={title} ref={ref}>
      <Box sx={{ px: 1 }}>
        <Stack direction='row' alignItems={'center'} justifyContent={'start'} spacing={1} sx={{ mb: 4 }}>
          <IconCmp color='primary' icon={icon} />
          <Typography variant='h4' color='primary'>
            {legend || title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {pageActions}
          {onFilterClick && <AppIconButton tooltip='Filter List' icon='filter' onClick={onFilterClick} />}
        </Stack>
        {children || title + ' under development'}
      </Box>
    </PageWithTitle>
  )
})

PageWithContainer.displayName = 'PageWithContainer'

export default PageWithContainer
