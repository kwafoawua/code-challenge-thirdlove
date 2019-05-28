import styled from '@emotion/styled'
import { fonts, sizes } from '../common'

export const AddButton = styled.div`
  background-color: black;
  color: white;
  font-family: ${fonts.primary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 50px;
  width: 335px;
  cursor: pointer;

 @media(min-width: ${sizes.mobile}) {
    width: 708px;
  }
  @media(min-width: ${sizes.tablet}) {
    width: 370px;
  }
`