import type { TItem, TOption, TQuestion, TSection } from '@/atoms/sections'
import { v4 } from 'uuid'

export const makeNewOption = (): TOption => ({
  id: v4(),
  text: '옵션',
})

export const makeNewItem = (type: TQuestion): TItem => ({
  id: v4(),
  label: '질문',
  type,
  options: [makeNewOption()],
  required: false,
})

export const makeNewItems = (): TItem[] => [makeNewItem('radio')]

export const makeNewSection = (): TSection => ({
  id: v4(),
  title: '',
  description: '',
  items: makeNewItems(),
})
