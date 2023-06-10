import Button from './Button'
import FabButton from './FabButton'
import IconButton from './IconButton'
import ToggleButton from './ToggleButton'

export default function Buttons(theme: any) {
  return Object.assign(Button(theme), FabButton(theme), IconButton(theme), ToggleButton(theme))
}
