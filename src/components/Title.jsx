import styled from '@emotion/styled'
import { colors, fonts, sizes } from '../common'

export const Title = styled.div`
  grid-area: title;
  align-self: end;
  font-family: ${fonts.title};
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  line-height: 1.09;
  letter-spacing: normal;
  text-align: center;
  color: ${colors.title};
  
  @media(min-width: ${sizes.mobile}) {
    font-size: 24px;
  }
`