import { style } from '@vanilla-extract/css'
import { vars } from '../global.css'

export const card = style({
  backgroundColor: vars.color.grayScale00,
  border: `1px solid ${vars.color.grayScale100}`,
  borderRadius: '8px',
  paddingTop: '22px',
  paddingBottom: '24px',
  overflow: 'hidden',
})

export const container = style({
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
})

export const first = style({
  borderStartStartRadius: 0,
})

export const focused = style({
  boxShadow: `0 4px 6px -1px ${vars.color.shadow}, 0 2px 4px -2px ${vars.color.shadow}`,
  selectors: {
    [`&:after`]: {
      display: 'block',
      position: 'absolute',
      height: '100%',
      width: '8px',
      top: 0,
      left: 0,
      backgroundColor: vars.color.blue500,
      content: '',
    },
  },
})
