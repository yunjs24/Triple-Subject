import ContentLogo from './ContentLogo'
import Matrics from './Matrics'
import AwardsBadges from './AwardBadges'

function StatisticSection() {
  return (
    <Wrapper>
      <ContentLogo />
      <Matrics />
      <AwardsBadges />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: auto;
`
export default StatisticSection