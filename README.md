# Output


# Run Project

```bash
git clone git@github.com:yunjs24/triple-subject.git
cd triple-subject
npm i
npm start
curl localhost:3000
```
브라우저에서 localhost:3000 으로 접속


# 사용한 기술

## Styled Component
---
Style Sheet 파일이 아니라 컴포넌트 단위로 관리하기에
컴포넌트 UI를 개발하는 것처럼 일관된 패턴으로 개발할 수 있습니다.

Javascript 소스 내에서 CSS를 스타일링 하기에 JS 환경을 활용하기 좋습니다.
ContentLogo 컴포넌트에 로고를 Background로 집어넣을때 직관적이었고 편리했습니다.
```js
import Logo from '../images/triple2x.png'

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
``` 

---