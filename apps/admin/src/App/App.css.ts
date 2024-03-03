import { vars } from '@jc-survey/ui'
import { style } from '@vanilla-extract/css'

export const firstCard = style({
  position: 'relative',
})

export const firstCardHighlighter = style({
  selectors: {
    '&::after': {
      content: '',
      height: '10px',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      borderStartEndRadius: '8px',
      backgroundColor: vars.color.primary500,
    },
  },
})
