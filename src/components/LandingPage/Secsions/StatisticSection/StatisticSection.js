import styled from 'styled-components'

import ContentLogo from './ContentLogo/ContentLogo'
import Matrics from './Matrics/Matrics'
import AwardsBadges from './AwardBadges/AwardBages'

function StatisticSection() {
  return (
    <Wrapper>
      <ContentLogo />
      <div style={{ marginLeft: '3%' }}>
        <Matrics />
        <AwardsBadges />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  height: auto;
`
export default StatisticSection
