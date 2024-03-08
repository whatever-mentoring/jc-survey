import { InputHTMLAttributes } from 'react'

import { radio } from './Radio.css'

type Props = InputHTMLAttributes<HTMLInputElement>

function Radio(props: Props) {
  return <input className={radio} type="radio" {...props} />
}

export { Radio }
