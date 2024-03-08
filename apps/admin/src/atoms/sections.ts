import { atom } from 'jotai'

import { makeNewSection } from '@/utils/makeNewThings'

export type TQuestion = 'radio' | 'checkbox' | 'text'

export type TOption = {
  id: string
  text: string
}

export type TItem = {
  id: string
  label: string
  type: TQuestion
  required: boolean
  options: TOption[]
}

export type TSection = {
  id: string
  title: string
  description: string
  items: TItem[]
}

export const sectionsAtom = atom<TSection[]>([makeNewSection()])
