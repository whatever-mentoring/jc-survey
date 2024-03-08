import { atom } from 'jotai'

import { makeNewSection } from '@/utils/makeNewSection'

export type TSection = {
  id: string
  title: string
  description: string
}

export const sectionsAtom = atom<TSection[]>([makeNewSection()])
