import { vars } from '@jc-survey/ui'
import { style } from '@vanilla-extract/css'

export const section = style({
  paddingTop: '12px',
})

export const sectionLabelContainer = style({
  display: 'flex',
})

export const sectionLabel = style({
  borderStartStartRadius: '8px',
  borderStartEndRadius: '8px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.9rem',
  lineHeight: 1.45,
  padding: '8px 16px',
  color: vars.color.grayScale00,
  backgroundColor: vars.color.primary500,
})

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})
