import styled from 'styled-components'

import { fadeinAnimation } from '../../../../../utils/fadein'
import Logo from '../images/triple2x.png'

function ContentLogo() {
  return (
    <StyledLogo>
      <p style={{ position: 'relative', top: '75%' }}>2021년 12월 기준</p>
    </StyledLogo>
  )
}

const StyledLogo = styled.article`
  text-align: center;
  font-size: 15px;
  min-width: 400px;
  min-height: 338px;
  align-items: center;
  margin-right: 3%;
  box-sizing: border-box;
  background-image: url(${Logo});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  ${fadeinAnimation}
`

export default ContentLogo
