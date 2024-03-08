import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../global.css'
import { focused } from '../Card/Card.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flexGrow: 1,
})

export const wrapper = style({
  position: 'relative',
})

export const title = style({
  backgroundColor: vars.color.grayScale50,
  padding: '1rem',
})

export const placeholder = style({
  position: 'absolute',
  pointerEvents: 'none',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  left: 0,
  right: 0,
  lineHeight: 1.65,
  height: '100%',
  padding: '0.2rem',
  color: vars.color.grayScale500,
})

export const input = style({
  border: 'none',
  lineHeight: 1.65,
  padding: '0.2rem',
  width: '100%',
  backgroundColor: 'transparent',
})

const widthBroader = keyframes({
  '0%': { transform: 'scaleX(0)', height: '1px' },
  '99%': { transform: 'scaleX(1) scaleY(3)', height: '1px' },
  '100%': { transform: 'scaleX(1) scaleY(2)', height: '1px' },
})

export const bottomLineWrapper = style({
  height: '3px',
})

export const bottomLine = style({
  transition: 'all 0.3s',
  selectors: {
    [`${focused} &`]: {
      backgroundColor: vars.color.grayScale100,
      height: '1px',
    },
    [`${input}:focus + ${bottomLineWrapper} > &`]: {
      backgroundColor: vars.color.primary500,
      animation: `${widthBroader} 0.3s forwards`,
    },
  },
})
