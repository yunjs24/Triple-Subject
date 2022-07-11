import { keyframes, css } from 'styled-components'

const fadeinKeyframes = keyframes`
0%{
  transform: translateY(10px);
  opacity: 0;
}
100%{
  transform: translateY(0);
  opacity: 1;
  }
`

export const fadeinAnimation = css`
  animation: ${fadeinKeyframes} 700ms linear forwards;
`
