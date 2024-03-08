import { FormEvent, useCallback } from 'react'
import { useAtom } from 'jotai'
import { produce } from 'immer'
import { TSection, sectionsAtom } from '@/atoms/sections'
import { useFocusCard } from '.'
import { makeNewSection } from '@/utils/makeNewSection'

export function useSurveyModel() {
  const [sections, setSections] = useAtom(sectionsAtom)

  const { openedCardIndex } = useFocusCard()

  const totalIndex = sections.length

  const handleSectionInput = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const { value, name } = e.currentTarget

      setSections((sections) =>
        produce<TSection[]>(sections, (draft) => {
          if (openedCardIndex == null) {
            return
          }
          const section = draft[openedCardIndex]
          if (section == null) {
            return
          }
          section[name as keyof TSection] = value
        }),
      )
    },
    [openedCardIndex, setSections],
  )

  const handleSectionAdd = useCallback(() => {
    setSections((sections) =>
      produce(sections, (draft) => {
        draft.push(makeNewSection())
      }),
    )
  }, [setSections])

  const handleSectionDelete = useCallback(
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

  return {
    sections,
    totalIndex,
    handleSectionAdd,
    handleSectionDelete,
    handleSectionInput,
  }
}
