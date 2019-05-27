import React from 'react'
import Carousel from 'nuka-carousel'
import styled from '@emotion/styled'
import { sizes, colors } from '../../common'

const CarouselContainer = styled.div`
  grid-area: image;
  display: flex;
  width: 375px;
  height: 375px;
  margin-bottom: 24px;

  @media(min-width: ${sizes.mobile}) {
    margin-bottom: 34px;
    width: 768px;
    height: 768px;
  }
`
const CarouselStyled = styled(Carousel)`
  .slider-control-bottomcenter {
    .paging-item {
      .paging-dot {
        background-color: ${colors.dot} !important;
        height: 7px !important;
        width: 7px !important;
      }
      &.active .paging-dot {
        background-color: ${colors.description} !important;
      }
      button {
        opacity: 1 !important;
        outline: none !important;
        -webkit-tap-highlight-color: transparent;
      }
    }
  }
  
  @media(min-width: ${sizes.mobile}){
    .slider-control-bottomcenter {
      .paging-item {
        .paging-dot {
          background-color: ${colors.dot} !important;
          height: 9px !important;
          width: 9px !important;
        }
      }
    }
  }
`



export const CarouselGallery = ({ children }) => (
  <CarouselContainer>
    <CarouselStyled
      renderCenterLeftControls={null}
      renderCenterRightControls={null}
      wrapAround={true}>
      {children}
    </CarouselStyled>
  </CarouselContainer>
)
