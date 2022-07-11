import styled from 'styled-components'

import { fadeinAnimation } from '../../../../../utils/fadein'
import Logo from '../images/triple2x.png'

function ContentLogo() {
  return (
    <div style={{ width: '400px' }}>
      <StyledLogo>
        <p>2021년 12월 기준</p>
      </StyledLogo>
    </div>
  )
}

const StyledLogo = styled.article`
  font-size: 15px;
  min-width: 400px;
  padding-top: 280px;

  box-sizing: border-box;
  background-image: url(${Logo});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  ${fadeinAnimation}
`

export default ContentLogo
