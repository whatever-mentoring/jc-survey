import { vars } from '@jc-survey/ui'
import { style } from '@vanilla-extract/css'

export const labelWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  alignItems: 'center',
})

export const selectBox = style({
  width: '180px',
  height: '42px',
  borderRadius: '4px',
  border: `1px solid ${vars.color.grayScale100}`,
})

export const optionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const optionWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const optionAddText = style({
  padding: '0.3rem 0.2rem',
  color: vars.color.grayScale500,
  borderBottom: `1px solid ${vars.color.grayScale500}`,
})

export const deleteButtonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
})

export const deleteButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
})
