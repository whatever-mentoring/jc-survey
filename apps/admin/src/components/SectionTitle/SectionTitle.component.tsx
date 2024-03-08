import { useCallback } from 'react'

import { Card, Input } from '@jc-survey/ui'

import { useFocusCard, useSurveyModel } from '@/hooks'

import * as $ from './SectionTitle.css'

type Props = {
  idx: number
}

function SectionTitle({ idx }: Props) {
  const { cardRef, handleCardBlur, changeCardFocus, openedCardInfo } =
    useFocusCard()

  const { sections, handleInputSection, handleDeleteSection } = useSurveyModel()

  const isFirst = idx === 0
  const canDelete = sections.length > 1
  const section = sections[idx]

  const handleCardFocus = useCallback(() => {
    if (!section) {
      return
    }

    changeCardFocus({ sectionIndex: idx, itemIndex: null })
  }, [changeCardFocus, idx, section])

  if (!section) {
    return null
  }

  const { title, description } = section

  return (
    <div className={$.firstCard}>
      <div className={isFirst ? $.firstCardHighlighter : undefined}>
        <Card
          isFirst
          isFocused={
            openedCardInfo.itemIndex == null &&
            openedCardInfo.sectionIndex === idx
          }
          onBlur={handleCardBlur}
          onClick={handleCardFocus}
          ref={cardRef}
        >
          <div className={$.titleWrapper}>
            <Input
              fontSize={isFirst ? '24pt' : '12pt'}
              name="title"
              onChange={handleInputSection}
              placeholder={isFirst ? '설문지 제목' : '섹션 제목(선택 사항)'}
              title="section_title"
              value={title}
            />
            {canDelete ? (
              <button
                className={$.deleteButton}
                onClick={() => handleDeleteSection(idx)}
                type="button"
              >
                섹션 삭제
              </button>
            ) : null}
          </div>
          <Input
            fontSize="11pt"
            name="description"
            onChange={handleInputSection}
            placeholder={isFirst ? '설문지 설명' : '설문 설명(선택 사항)'}
            title="section_description"
            value={description}
          />
        </Card>
      </div>
    </div>
  )
}

export default SectionTitle
