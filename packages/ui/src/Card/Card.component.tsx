import { FocusEvent, MouseEvent, ReactNode, forwardRef } from 'react'
import * as $ from './Card.css'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  isFirst?: boolean
  isFocused?: boolean
  onClick: (e: MouseEvent<HTMLDivElement>) => void
  onBlur: (e: FocusEvent<HTMLDivElement>) => void
}

export const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, isFirst = false, isFocused = false, onClick, onBlur }, ref) => (
    <div
      className={classNames([
        $.container,
        isFirst ? $.first : null,
        isFocused ? $.focused : null,
      ])}
    >
      <div
        onClick={onClick}
        onBlur={onBlur}
        className={classNames([$.card, isFirst ? $.first : null])}
        ref={ref}
      >
        {children}
      </div>
    </div>
  ),
)
