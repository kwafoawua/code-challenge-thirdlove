import styled from '@emotion/styled'
import { colors, fonts } from '../styles'

export const Label = styled.div`
  display: inline-flex;
  font-family: ${fonts.primary};
  font-size: 13px;
  letter-spacing: 1.5px;
  color: ${colors.darkGray};
  font-weight: ${props => props.bold ? 600 : 'normal'};
  text-transform: uppercase;
  margin-bottom: 5px;
`
