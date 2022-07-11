import styled from 'styled-components'

import ContentLogo from './ContentLogo/ContentLogo'
import Matrics from './Matrics/Matrics'
import AwardsBadges from './AwardBadges/AwardBages'

function StatisticSection() {
  return (
    <Wrapper>
      <ContentLogo />
      <div>
        <Matrics />
        <AwardsBadges />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 160px;
  height: auto;
`
export default StatisticSection
