import Input from './Input'
import Radio from './Radio'
import Switch from './Switch'
import Select from './Select'
import Checkbox from './Checkbox'
import ControlLabel from './ControlLabel'

export default function FormElements(theme: any) {
  return Object.assign(Input(theme), Radio(theme), Switch(theme), Select(theme), Checkbox(theme), ControlLabel(theme))
}
