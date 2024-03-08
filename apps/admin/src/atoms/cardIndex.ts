import { atom } from 'jotai'

export type TOpenedCardInfo = {
  sectionIndex: number
  itemIndex: number | null
  isOpened: boolean
}

export const cardInfoAtom = atom<TOpenedCardInfo>({
  sectionIndex: 0,
  itemIndex: null,
  isOpened: true,
})
