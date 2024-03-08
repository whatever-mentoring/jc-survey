import { style } from '@vanilla-extract/css'
import { vars } from '..'

export const radio = style({
  flexShrink: 0,
  verticalAlign: 'middle',
  appearance: 'none',
  border: `max(2px, 0.1em) solid ${vars.color.grayScale500}`,
  borderRadius: '50%',
  width: '1.1rem',
  height: '1.1rem',
  transition: `all 0.5s ease`,
  backgroundColor: vars.color.grayScale00,
  selectors: {
    [`&:checked`]: {
      border: `0.4em solid ${vars.color.primary500}`,
    },
    [`&:disabled`]: {
      backgroundColor: vars.color.grayScale100,
      boxShadow: 'none',
      opacity: 0.7,
    },
  },
})
