import styled from '@emotion/styled'
import { fonts } from '../styles'

export const AddButton = styled.div`
  background-color: black;
  color: white;
  font-family: ${fonts.primary};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  
  height: 50px;
  @media(max-width: 1440px) {
    width: 370px;
  }
  @media(max-width: 768px) {
    width: 90%;
  }
  @media(max-width: 480px) {
    width: 90%;
  }


`