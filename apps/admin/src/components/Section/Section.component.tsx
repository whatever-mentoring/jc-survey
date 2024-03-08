import { ReactNode } from 'react'
import * as $ from './Section.css'

type Props = {
  children: ReactNode
  totalIndex: number
  sectionNumber: number
}

function Section({ children, totalIndex, sectionNumber }: Props) {
  return (
    <section className={$.section}>
      <div className={$.sectionLabelContainer}>
        <div className={$.sectionLabel}>
          {totalIndex} 중 {sectionNumber} 섹션
        </div>
      </div>
      <div className={$.body}>{children}</div>
    </section>
  )
}

export default Section
