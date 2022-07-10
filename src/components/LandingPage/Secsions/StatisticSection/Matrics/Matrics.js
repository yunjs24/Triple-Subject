import styled from 'styled-components'

function Matrics() {
  return (
    <Fadein>
      <p>350만 명의 사용자</p>
      <p>21만 개의 리뷰</p>
      <p>650만 개의 저장</p>
    </Fadein>
  )
}

const Fadein = styled.div`
  margin: 100px 0 0 600px;
  animation: 700ms ease-in-out forwards;
  animation-delay: 100ms;
`

export default Matrics
