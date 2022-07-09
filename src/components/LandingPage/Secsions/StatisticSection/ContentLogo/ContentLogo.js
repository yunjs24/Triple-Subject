import styled from 'styled-components'

import Logo from '../images/triple2x.png'

function ContentLogo() {
  return (
    <StyledLogo>
      <p>2021년 12월 기준</p>
    </StyledLogo>
  )
}
const StyledLogo = styled.article`
  font-size: 15px;
  text-align: center;

  position: absolute;

  width: 400px;
  height: 338px;

  padding-top: 280px;

  box-sizing: border-box;

  background-image: url(${Logo});
  background-size: 400px 338px;
  background-repeat: no-repeat;
`

export default ContentLogo
