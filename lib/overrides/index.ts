import Buttons from './Button'
import { RUIThemeOptions } from '../types'
import Paper from './Paper'
import Backdrop from './Backdrop'
import Avatar from './Avatar'
import Typography from './Typography'
import FormElements from './Form'

import Card from './Card'
import Lists from './Lists'
import Tooltip from './Tooltip'
import Autocomplete from './Autocomplete'
import AppBar from './AppBar'
import { TableCell, TableRow, TablePagination } from './Table'
import Accordion from './Accordion'
import Badge from './Badge'
import Chip from './Chip'
import Container from './Container'
import Menu from './Menu'
import Pagination from './Pagination'
import Popover from './Popover'
import Progress from './Progress'
import Rating from './Rating'
import Skeleton from './Skeleton'
import Slider from './Slider'
import Snackbar from './Snackbar'
import Stepper from './Stepper'
import SvgIcon from './SvgIcon'
import Timeline from './Timeline'
import TreeView from './TreeView'

export default function ComponentsOverrides(theme: RUIThemeOptions) {
  return Object.assign(
    Buttons(theme),
    Paper(theme),
    Backdrop(theme),
    Avatar(theme),
    Typography(theme),
    FormElements(theme),
    Card(theme),
    Lists(theme),
    Tooltip(theme),
    Autocomplete(theme),
    AppBar(theme),
    TableCell(theme),
    TableRow(theme),
    TablePagination(theme),
    Accordion(theme),
    Badge(theme),
    Chip(theme),
    Container(theme),
    Menu(theme),
    Pagination(theme),
    Popover(theme),
    Progress(theme),
    Rating(theme),
    Skeleton(theme),
    Slider(theme),
    Snackbar(theme),
    Stepper(theme),
    SvgIcon(theme),
    Timeline(theme),
    TreeView(theme),
  )
}
