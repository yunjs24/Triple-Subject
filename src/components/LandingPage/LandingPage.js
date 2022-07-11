import styled from 'styled-components'

import StatisticSection from './Secsions/StatisticSection/StatisticSection'

function LandingPage() {
  return (
    <SectionContainer>
      <StatisticSection />
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  min-width: 1200px;
`

export default LandingPage
