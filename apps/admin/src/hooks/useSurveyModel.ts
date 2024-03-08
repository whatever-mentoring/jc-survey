import { ChangeEvent, FormEvent, useCallback } from 'react'
import { useAtom } from 'jotai'
import { produce } from 'immer'
import { TQuestion, TSection, sectionsAtom } from '@/atoms/sections'
import { useFocusCard } from '.'
import {
  makeNewItem,
  makeNewOption,
  makeNewSection,
} from '@/utils/makeNewThings'

export function useSurveyModel() {
  const [sections, setSections] = useAtom(sectionsAtom)

  const { openedCardInfo } = useFocusCard()

  const totalIndex = sections.length

  const handleInputSection = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const { value, name } = e.currentTarget

      setSections((sections) =>
        produce<TSection[]>(sections, (draft) => {
          const { sectionIndex } = openedCardInfo
          if (sectionIndex == null) {
            return
          }
          const section = draft[sectionIndex]
          if (section == null) {
            return
          }
          section[name as 'title' | 'description'] = value
        }),
      )
    },
    [openedCardInfo, setSections],
  )

  const handleAddSection = useCallback(() => {
    setSections((sections) =>
      produce(sections, (draft) => {
        draft.splice(openedCardInfo.sectionIndex + 1, 0, makeNewSection())
      }),
    )
  }, [openedCardInfo.sectionIndex, setSections])

  const handleDeleteSection = useCallback(
    (idx: number) => {
      const sectionNumber = idx + 1

      if (window.confirm(`${sectionNumber} 섹션을 삭제하시겠습니까?`)) {
        setSections((sections) =>
          produce<TSection[]>(sections, (draft) => {
            draft.splice(idx, 1)
          }),
        )
      }
    },
    [setSections],
  )

  const handleAddItem = useCallback(() => {
    setSections((sections) =>
      produce<TSection[]>(sections, (draft) => {
        draft[openedCardInfo.sectionIndex]?.items.splice(
          (openedCardInfo.itemIndex ?? -1) + 1,
          0,
          makeNewItem('radio'),
        )
      }),
    )
  }, [openedCardInfo.itemIndex, openedCardInfo.sectionIndex, setSections])

  const handleDeleteItem = useCallback(
    (itemIndex: number) => {
      setSections((sections) =>
        produce<TSection[]>(sections, (draft) => {
          const section = draft[openedCardInfo.sectionIndex]
          if (!section) {
            return
          }

          section.items.splice(itemIndex, 1)
        }),
      )
    },
    [openedCardInfo.sectionIndex, setSections],
  )

  const handleChangeItemType = useCallback(
    (type: TQuestion) => {
      setSections((sections) =>
        produce<TSection[]>(sections, (draft) => {
          const section = draft[openedCardInfo.sectionIndex]
          if (!section) {
            return
          }

          if (openedCardInfo.itemIndex == null) {
            return
          }

          const item = section.items[openedCardInfo.itemIndex]

          if (!item) {
            return
          }

          item.type = type
        }),
      )
    },
    [openedCardInfo.itemIndex, openedCardInfo.sectionIndex, setSections],
  )

  const handleChangeItemLabel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSections((sections) =>
        produce<TSection[]>(sections, (draft) => {
          const section = draft[openedCardInfo.sectionIndex]
          if (!section) {
            return
          }

          if (openedCardInfo.itemIndex == null) {
            return
          }

          const item = section.items[openedCardInfo.itemIndex]

          if (!item) {
            return
          }

          item.label = e.currentTarget.value
        }),
      )
    },
    [openedCardInfo.itemIndex, openedCardInfo.sectionIndex, setSections],
  )

  const handleAddOption = useCallback(
    (itemIndex: number) => {
      setSections((sections) =>
        produce<TSection[]>(sections, (draft) => {
          const section = draft[openedCardInfo.sectionIndex]
          if (!section) {
            return
          }

          const item = section.items[itemIndex]

          item?.options.push(makeNewOption())
        }),
      )
    },
    [openedCardInfo.sectionIndex, setSections],
  )

  const handleChangeOption = useCallback(
    (e: ChangeEvent<HTMLInputElement>, optionIndex: number) => {
      setSections((sections) =>
        produce<TSection[]>(sections, (draft) => {
          const section = draft[openedCardInfo.sectionIndex]
          if (!section) {
            return
          }

          if (openedCardInfo.itemIndex == null) {
            return
          }

          const item = section.items[openedCardInfo.itemIndex]

          if (!item) {
            return
          }

          const option = item.options[optionIndex]

          if (!option) {
            return
          }

          option.text = e.currentTarget.value
        }),
      )
    },
    [openedCardInfo.itemIndex, openedCardInfo.sectionIndex, setSections],
  )

  const handleDeleteOption = useCallback(
    (optionIndex: number) => {
      setSections((sections) =>
        produce<TSection[]>(sections, (draft) => {
          const section = draft[openedCardInfo.sectionIndex]
          if (!section) {
            return
          }

          if (openedCardInfo.itemIndex == null) {
            return
          }

          const item = section.items[openedCardInfo.itemIndex]

          if (!item) {
            return
          }

          item.options.splice(optionIndex, 1)
        }),
      )
    },
    [openedCardInfo.itemIndex, openedCardInfo.sectionIndex, setSections],
  )

  return {
    sections,
    totalIndex,
    handleAddSection,
    handleDeleteSection,
    handleInputSection,
    handleAddItem,
    handleDeleteItem,
    handleChangeItemType,
    handleChangeItemLabel,
    handleAddOption,
    handleChangeOption,
    handleDeleteOption,
  }
}
