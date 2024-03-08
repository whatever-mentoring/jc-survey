import { styles } from '@jc-survey/ui'

import Section from '@/components/Section/Section.component'
import SectionTitle from '@/components/SectionTitle/SectionTitle.component'
import { useSurveyModel } from '@/hooks'

function App() {
  const { handleSectionAdd, sections, totalIndex } = useSurveyModel()

  return (
    <main className={styles.container}>
      {sections.map((section, index) => (
        <Section
          key={section.id}
          sectionNumber={index + 1}
          totalIndex={totalIndex}
        >
          <SectionTitle idx={index} />
        </Section>
      ))}
      <button onClick={handleSectionAdd} type="button">
        섹션 추가
      </button>
    </main>
  )
}

export default App
