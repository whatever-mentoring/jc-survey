import { InputHTMLAttributes } from 'react'

import { checkbox } from './Checkbox.css'

type Props = InputHTMLAttributes<HTMLInputElement>

function Checkbox(props: Props) {
  return <input className={checkbox} type="checkbox" {...props} />
}

export { Checkbox }
