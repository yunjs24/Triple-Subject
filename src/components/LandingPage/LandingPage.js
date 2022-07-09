import { StatisticSection } from './Secsions/StatisticSection'

function LandingPage() {
  return (
    <SectionContainer>
      <StatisticSection />
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  min-width: 1200px;
  overflow: hideen;
`

export default LandingPage
