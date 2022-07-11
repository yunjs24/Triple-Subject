import styled from 'styled-components'

import { fadeinAnimation } from '../../../../../utils/fadein'
import Logo from '../images/triple2x.png'

function ContentLogo() {
  return <StyledLogo>2021년 12월 기준</StyledLogo>
}

const StyledLogo = styled.article`
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 5%;
  font-size: 15px;
  min-width: 400px;
  min-height: 338px;
  margin-right: 6%;
  box-sizing: border-box;
  background-image: url(${Logo});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  ${fadeinAnimation}
`

export default ContentLogo
