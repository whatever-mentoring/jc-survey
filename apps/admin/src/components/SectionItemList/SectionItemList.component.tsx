import { useSurveyModel } from '@/hooks'
import SectionItem from '@/components/SectionItem/SectionItem.component'

type Props = {
  sectionIndex: number
}

function SectionItemList({ sectionIndex }: Props) {
  const {
    sections,
    handleDeleteItem,
    handleChangeItemType,
    handleChangeItemLabel,
    handleAddOption,
    handleChangeOption,
    handleDeleteOption,
  } = useSurveyModel()

  const section = sections[sectionIndex]

  if (!section) {
    return null
  }

  const { items } = section

  return (
    <>
      {items.map((item, index) => (
        <SectionItem
          item={item}
          itemIndex={index}
          key={item.id}
          onAddOption={handleAddOption}
          onChangeItemType={handleChangeItemType}
          onChangeLabel={handleChangeItemLabel}
          onChangeOption={handleChangeOption}
          onDeleteItem={handleDeleteItem}
          onDeleteOption={handleDeleteOption}
          sectionIndex={sectionIndex}
        />
      ))}
    </>
  )
}

export default SectionItemList
