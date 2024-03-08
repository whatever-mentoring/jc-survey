import { FocusEvent, ReactNode, forwardRef } from 'react'
import * as $ from './Card.css'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  isFirst?: boolean
  isFocused?: boolean
  onFocus: (e: FocusEvent<HTMLDivElement>) => void
  onBlur: (e: FocusEvent<HTMLDivElement>) => void
}

export const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, isFirst = false, isFocused = false, onFocus, onBlur }, ref) => (
    <div
      className={classNames([
        $.container,
        isFirst ? $.first : null,
        isFocused ? $.focused : null,
      ])}
    >
      <div
        onFocus={onFocus}
        onBlur={onBlur}
        className={classNames([$.card, isFirst ? $.first : null])}
        ref={ref}
      >
        {children}
      </div>
    </div>
  ),
)
