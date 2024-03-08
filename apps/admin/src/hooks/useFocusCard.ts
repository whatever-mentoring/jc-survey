import { useAtom } from 'jotai'
import { useCallback, useRef } from 'react'
import { TOpenedCardInfo, cardInfoAtom } from '../atoms/cardIndex'

export function useFocusCard() {
  const [openedCardInfo, setOpenedCardInfo] = useAtom(cardInfoAtom)
  const cardRef = useRef<HTMLDivElement>(null)

  const changeCardFocus = useCallback(
    (
      nextOpenedCardInfo: Pick<TOpenedCardInfo, 'sectionIndex' | 'itemIndex'>,
    ) => {
      if (!cardRef.current) {
        return
      }
      setOpenedCardInfo({ ...nextOpenedCardInfo, isOpened: true })
    },
    [setOpenedCardInfo],
  )

  const handleCardBlur = useCallback(() => {
    if (!cardRef.current) {
      return
    }
    setOpenedCardInfo((prev) => ({ ...prev, isOpened: false }))
  }, [setOpenedCardInfo])

  return {
    openedCardInfo,
    cardRef,
    changeCardFocus,
    handleCardBlur,
  }
}
