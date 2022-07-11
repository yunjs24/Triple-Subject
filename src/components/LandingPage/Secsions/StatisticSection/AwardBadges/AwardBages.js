import styled from 'styled-components'

import { fadeinAnimation } from '../../../../../utils/fadein'
import googleAward from '../images/play-store2x.png'
import appleAward from '../images/badge-apple4x.png'

const AwardsInfo = [
  {
    store: '2018 구글 플레이스토어',
    award: '올해의 앱 최우수상 수상',
    badge: `${googleAward}`,
  },
  {
    store: '2018 애플 앱스토어',
    award: '오늘의 여행앱 선정',
    badge: `${appleAward}`,
  },
]

function AwardBadges() {
  return (
    <BadgesWrapper>
      <ContentWrapper>
        {AwardsInfo.map((data, idx) => (
          <AwardContent key={idx} {...data} />
        ))}
      </ContentWrapper>
    </BadgesWrapper>
  )
}

function AwardContent({ store, award, badge }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img alt="" src={badge} style={{ width: '64px', height: '64px' }} />
      <div>
        <p>{store}</p>
        <p>{award}</p>
      </div>
    </div>
  )
}

const BadgesWrapper = styled.div`
  opacity: 0;
  ${fadeinAnimation}
  animation-delay: 200ms;
`

const ContentWrapper = styled.div`
  display: flex;
  height: 200px;
  p {
    font-size: 14px;
    font-weight: bold;
    color: rgb(58, 58, 58, 0.8);
    line-height: 0.5;
    margin-left: 5px;
  }
`

export default AwardBadges
