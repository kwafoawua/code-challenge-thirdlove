import styled from '@emotion/styled'
import { sizes } from '../common'

export const DescriptionContainer = styled.div`
  grid-area: description;
  margin-top: 39px;

 @media(min-width: ${sizes.mobile}) {
  margin-bottom: 53px;
 }
  
 @media(min-width: ${sizes.tablet}) {
  margin-top: 35px;
  margin-bottom: 79px;
 }
`