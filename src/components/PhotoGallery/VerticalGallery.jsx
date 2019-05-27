import styled from '@emotion/styled'
import { colors } from '../../common'

export const VerticalGallery = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  > img {
  width: 74px;
  height: 82px;
  margin-bottom: 10px;
  outline: none;
  
  &:focus {
    border: solid 1px ${colors.borderGallery};
  }
}
`