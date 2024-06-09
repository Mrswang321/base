import styled from 'styled-components'
import border from '../styled/border'

const SearchWrap = styled.div `
  height: 0.65rem;
  width: 100%;
  background-color: ${props => props.outerbg};
  padding: .1rem .15rem;
`

const SearchInnerWrap = border({
  Comp: (
    styled.div `
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.innerbg};
      border-radius: .06rem;
      color: #666;
      .icon {
        margin-right: .04rem;
      }
    `
  )
})

export {
  SearchWrap,
  SearchInnerWrap
}