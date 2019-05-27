import styled from '@emotion/styled'
import { colors } from '../../common'

export const ColorCircle = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 0px;
  background-color: ${props => props.color};
  cursor: pointer;
  outline: none;
  
  &:focus {
    border: solid 3px ${colors.circleBorder};
  }
`