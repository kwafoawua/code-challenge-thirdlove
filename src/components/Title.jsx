import styled from '@emotion/styled'
import { colors, fonts } from '../styles'

export const Title = styled.div`
  width: 90%;
  font-family: ${fonts.title};
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  line-height: 1.09;
  letter-spacing: normal;
  text-align: center;
  color: ${colors.darkGray};
  
  @media(max-width: 480px) {
    font-size: 22px;
  }
`