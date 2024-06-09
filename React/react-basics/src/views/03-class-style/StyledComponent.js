import styled from 'styled-components'

function setColor(props) {
  return props.color
}

const DivWraper = styled.div `
  font-size: 100px;
  font-weight: bold;
  color: ${setColor};
`

const OtherDivWraper = styled(DivWraper) `
  font-style: italic
`

export {
  DivWraper,
  OtherDivWraper
}