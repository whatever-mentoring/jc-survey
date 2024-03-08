import { useCallback } from 'react'

import { Card, Input } from '@jc-survey/ui'

import { useFocusCard, useSurveyModel } from '@/hooks'

import * as $ from './SectionTitle.css'

type Props = {
  idx: number
}

function SectionTitle({ idx }: Props) {
  const { cardRef, handleCardBlur, changeFocusCard, openedCardIndex } =
    useFocusCard()

  const { sections, handleSectionInput, handleSectionDelete } = useSurveyModel()

  const isFirst = idx === 0
  const canDelete = sections.length > 1
  const section = sections[idx]

  const handleCardFocus = useCallback(() => {
    if (!section) {
      return
    }

    changeFocusCard(idx)
  }, [changeFocusCard, idx, section])

  if (!section) {
    return null
  }

  const { title, description } = section

  return (
    <div className={$.firstCard}>
      <div className={isFirst ? $.firstCardHighlighter : undefined}>
        <Card
          isFirst
          isFocused={openedCardIndex === idx}
          onBlur={handleCardBlur}
          onFocus={handleCardFocus}
          ref={cardRef}
        >
          <div className={$.titleWrapper}>
            <Input
              fontSize={isFirst ? '24pt' : '12pt'}
              name="title"
              onChange={handleSectionInput}
              placeholder="섹션 제목(선택 사항)"
              title="section_title"
              value={title}
            />
            {canDelete ? (
              <button
                className={$.deleteButton}
                onClick={() => handleSectionDelete(idx)}
                type="button"
              >
                섹션 삭제
              </button>
            ) : null}
          </div>
          <Input
            fontSize="11pt"
            name="description"
            onChange={handleSectionInput}
            placeholder="섹션 설명(선택 사항)"
            title="section_description"
            value={description}
          />
        </Card>
      </div>
    </div>
  )
}

export default SectionTitle
