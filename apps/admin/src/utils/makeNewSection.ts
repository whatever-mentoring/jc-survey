import { TSection } from '@/atoms/sections'
import { v4 } from 'uuid'

export const makeNewSection = (): TSection => ({
  id: v4(),
  title: '',
  description: '',
})
