import styled from '@emotion/styled'
import { colors, fonts, sizes } from '../common'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 44px 22px auto;
  grid-template-columns: 20px 335px 20px;
  grid-template-areas: 
    ". title ."
    ". price ."
    "image image image"
    ". content ."
    ". description .";
    
  p, ul {
    font-family: ${fonts.description};
    font-size: 13px;
    color: ${colors.description};
    line-height: 1.77;
  }
  
  ul {
    padding-left: 18px;
  }
  
  @media(min-width: ${sizes.mobile}){
    grid-template-rows: 58px 40px auto;
    grid-template-columns: 30px 708px 30px;
  }
  
  @media(min-width: ${sizes.tablet}) {
    margin-top: 68px;
    max-width: 1440px;
    grid-template-rows: 58px 40px auto;
    grid-template-columns: 157px 736px 38px 371px;
    grid-template-areas: 
    ". image . title"
    ". image . price"
    ". image . content"
    ". description . .";
  }
`