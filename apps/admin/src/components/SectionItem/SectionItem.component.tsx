import { ChangeEvent, useCallback } from 'react'

import { Card, Checkbox, Input, Radio, vars } from '@jc-survey/ui'

import type { TItem, TQuestion } from '@/atoms/sections'
import { useFocusCard } from '@/hooks'

import * as $ from './SectionItem.css'
import TrashCan from '@/assets/TrashCan'

type Props = {
  sectionIndex: number
  itemIndex: number
  item: TItem
  onDeleteItem: (itemIndex: number) => void
  onChangeLabel: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeItemType: (type: TQuestion) => void
  onAddOption: (itemIndex: number) => void
  onChangeOption: (
    e: ChangeEvent<HTMLInputElement>,
    optionIndex: number,
  ) => void
  onDeleteOption: (optionIndex: number) => void
}

function SectionItem({
  sectionIndex,
  itemIndex,
  item,
  onDeleteItem,
  onChangeLabel,
  onChangeItemType,
  onAddOption,
  onChangeOption,
  onDeleteOption,
}: Props) {
  const { openedCardInfo, changeCardFocus, handleCardBlur, cardRef } =
    useFocusCard()

  const handleCardFocus = useCallback(() => {
    changeCardFocus({ sectionIndex, itemIndex })
  }, [changeCardFocus, itemIndex, sectionIndex])

  const handleChangeItemType = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.currentTarget
      onChangeItemType(value as TQuestion)
    },
    [onChangeItemType],
  )

  const handleClickDelete = () => {
    onDeleteItem(itemIndex)
  }

  const isFocused =
    openedCardInfo.sectionIndex === sectionIndex &&
    openedCardInfo.itemIndex === itemIndex

  return (
    <Card
      isFocused={isFocused}
      onBlur={handleCardBlur}
      onClick={handleCardFocus}
      ref={cardRef}
    >
      <div className={$.labelWrapper}>
        <Input onChange={onChangeLabel} placeholder="질문" value={item.label} />
        <select
          className={$.selectBox}
          defaultValue="radio"
          onChange={handleChangeItemType}
        >
          <option value="text">단답형</option>
          <option value="radio">객관식</option>
          <option value="checkbox">체크박스</option>
        </select>
      </div>
      {item.type === 'text' ? (
        <Input
          disabled
          onChange={() => {}}
          placeholder="단답형 텍스트"
          value=""
        />
      ) : (
        <div className={$.optionList}>
          {item.options.map((option, index) => (
            <div className={$.optionWrapper} key={option.id}>
              {item.type === 'radio' && <Radio disabled />}
              {item.type === 'checkbox' && <Checkbox disabled />}
              <Input
                onChange={(e) => onChangeOption(e, index)}
                placeholder="옵션"
                value={option.text}
              />
              {item.options.length > 1 && (
                <button onClick={() => onDeleteOption(index)} type="button">
                  <TrashCan />
                </button>
              )}
            </div>
          ))}

          <button
            className={$.optionWrapper}
            onClick={() => onAddOption(itemIndex)}
            type="button"
          >
            {item.type === 'radio' && <Radio disabled />}
            {item.type === 'checkbox' && <Checkbox disabled />}
            <span className={$.optionAddText}>옵션 추가</span>
          </button>
        </div>
      )}
      <div className={$.deleteButtonWrapper}>
        <button
          className={$.deleteButton}
          onClick={handleClickDelete}
          type="button"
        >
          <TrashCan />
          <span>질문 삭제</span>
        </button>
      </div>
    </Card>
  )
}

export default SectionItem
