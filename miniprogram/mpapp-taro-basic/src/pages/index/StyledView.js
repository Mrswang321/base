import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

const Title = styled(View)`
  color: ${props => props.color};
  font-size: 50px;
`;

export default Title