import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { fadeinAnimation } from '../../../../../utils/fadein'

const numbers = [350, 21, 650]

function Matrics() {
  return (
    <TextWrapper>
      <div>
        <strong>{CountUp(numbers[0])}만 </strong>명개의 사용자
      </div>
      <div>
        <strong>{CountUp(numbers[1])}만 </strong>개의 리뷰
      </div>
      <div>
        <strong>{CountUp(numbers[2])}만 </strong>개의 저장
      </div>
    </TextWrapper>
  )
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function CountUp(to) {
  const from = 0
  const duration = 2000
  const [count, setCount] = useState(from)
  useEffect(() => {
    let currentNum = from
    const frame = 1000 / 60
    const totalFrame = Math.round(duration / frame)
    const counter = setInterval(() => {
      const percent = easeOutExpo(++currentNum / totalFrame)
      const currentCount = Math.round(to * percent)
      setCount(currentCount)

      if (currentNum === totalFrame) {
        clearInterval(counter)
      }
    }, frame)
  }, [to, from, duration])

  return count
}
const TextWrapper = styled.div`
  font-size: 36px;
  min-width: 400px;
  color: rgb(58, 58, 58);
  ${fadeinAnimation}
  animation-delay: 100ms;
`
export default Matrics
