import { useAtom } from 'jotai'
import { useCallback, useRef } from 'react'
import { cardIndex } from '../atoms/cardIndex'

export function useFocusCard() {
  const [openedCardIndex, setOpenedCardIndex] = useAtom(cardIndex)

  const cardRef = useRef<HTMLDivElement>(null)

  const changeFocusCard = useCallback(
    (idx: number) => {
      if (!cardRef.current) {
        return
      }

      setOpenedCardIndex(idx)
    },
    [setOpenedCardIndex],
  )

  const handleCardBlur = useCallback(() => {
    if (!cardRef.current) {
      return
    }

    setOpenedCardIndex(null)
  }, [setOpenedCardIndex])

  return {
    openedCardIndex,
    cardRef,
    changeFocusCard,
    handleCardBlur,
  }
}
