import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SettingsIcon from '@mui/icons-material/Settings'
import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'
import ReceiptIcon from '@mui/icons-material/Receipt'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import Category from '@mui/icons-material/Category'
import FilterListIcon from '@mui/icons-material/FilterList'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

type SvgIconType = OverridableComponent<SvgIconTypeMap<any, 'svg'>> & {
  muiName: string
}

const iconSet: { [key: string]: SvgIconType } = {
  dashboard: DashboardIcon,
  account: AccountBoxIcon,
  setting: SettingsIcon,
  home: HomeIcon,
  add: AddIcon,
  transaction: ReceiptIcon,
  master: AdminPanelSettingsIcon,
  category: Category,
  filter: FilterListIcon,
}

type IconCmpProps = {
  icon: string
  [key: string]: string
}
const IconCmp = (props: IconCmpProps) => {
  const { icon, ...rest } = props
  let IconCmp: SvgIconType = iconSet[icon]
  if (!IconCmp) IconCmp = iconSet['home']
  return <IconCmp {...rest} />
}
export default IconCmp
