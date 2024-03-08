import { FormEvent, InputHTMLAttributes, forwardRef } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import classNames from 'classnames'
import * as $ from './Input.css'

type Props = {
  placeholder: string
  value: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
  isTitle?: boolean
  fontSize?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      placeholder,
      value,
      onChange,
      isTitle = false,
      fontSize = '16px',
      ...props
    },
    ref,
  ) => {
    return (
      <div className={classNames([$.container, isTitle ? $.title : null])}>
        <div className={$.wrapper}>
          {!value && (
            <div
              className={$.placeholder}
              style={assignInlineVars({ fontSize, lineHeight: '1' })}
            >
              {placeholder}
            </div>
          )}
          <input
            className={$.input}
            style={assignInlineVars({ fontSize })}
            onChange={onChange}
            value={value}
            ref={ref}
            title={props.name}
            {...props}
          />
          <div className={$.bottomLineWrapper}>
            <div className={$.bottomLine} />
          </div>
        </div>
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
