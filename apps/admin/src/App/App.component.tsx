import { styles } from '@jc-survey/ui'

import Section from '@/components/Section/Section.component'
import SectionTitle from '@/components/SectionTitle/SectionTitle.component'
import { useFocusCard, useSurveyModel } from '@/hooks'
import SectionItemList from '@/components/SectionItemList/SectionItemList.component'

function App() {
  const { sections, totalIndex, handleAddSection, handleAddItem } =
    useSurveyModel()

  return (
    <main className={styles.container}>
      {sections.map((section, index) => (
        <Section
          key={section.id}
          sectionNumber={index + 1}
          totalIndex={totalIndex}
        >
          <SectionTitle idx={index} />
          <SectionItemList sectionIndex={index} />
        </Section>
      ))}
      <button onClick={handleAddSection} type="button">
        섹션 추가
      </button>
      <button onClick={handleAddItem} type="button">
        질문 추가
      </button>
    </main>
  )
}

export default App
