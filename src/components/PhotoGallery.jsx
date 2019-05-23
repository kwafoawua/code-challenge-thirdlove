import styled from '@emotion/styled'
import { sizes } from '../common'

export const PhotoGallery = styled.img`
  grid-area: image;
  width: ${sizes.mobile};
  margin-top: 20px;
  margin-bottom: 24px;
  
  @media(min-width: ${sizes.mobile}){
    width: ${sizes.tablet};
    margin-top: 23px;
    margin-bottom: 34px;
  }
`