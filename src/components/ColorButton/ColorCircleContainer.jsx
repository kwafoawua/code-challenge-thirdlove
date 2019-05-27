import styled from '@emotion/styled'
import { sizes } from '../../common'

export const ColorCircleContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 25px;
  margin-top: 15px;
  
  @media(min-width: ${sizes.mobile}) and (max-width: ${sizes.tablet}) {
    margin-bottom: 34px;
  }
`