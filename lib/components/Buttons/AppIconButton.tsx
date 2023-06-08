import React from 'react'
import { Tooltip, IconButton, styled } from '@mui/material'
import { default as IconCmp } from '../icons'

type AppIconButtonProps = {
  tooltip?: string
  icon: string
  iconProps?: any
  buttonProps?: any
  onClick: (...args: any[]) => void
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
}))

const AppIconButton = (props: AppIconButtonProps) => {
  const { tooltip, icon, iconProps = {}, buttonProps = {}, onClick } = props

  const buttonCmp = (
    <StyledIconButton {...buttonProps} onClick={onClick}>
      <IconCmp {...iconProps} icon={icon} />
    </StyledIconButton>
  )

  return (tooltip && <Tooltip title={tooltip}>{buttonCmp}</Tooltip>) || buttonCmp
}

export default AppIconButton
