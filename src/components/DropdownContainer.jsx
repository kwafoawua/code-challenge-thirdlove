import React from 'react'
import styled from '@emotion/styled'
import { colors, sizes } from '../common'
import { Label } from "./Label"

const SizeDropdown = styled.select`
  height: 44px;
  width: 160px;
  border: solid 1px ${colors.dropdownBorder};   
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 10px;
  outline: none;
  
  @media(min-width: ${sizes.mobile}) {
    width: 170px;
  }  
  
  @media(min-width: ${sizes.tablet}) {
    width: 178px;
  }
`

const ArrowWrapper = styled.label`
  height: 44px;    
  width: 160px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 19px;
  overflow: hidden; 
  
  @media(min-width: ${sizes.mobile}) {
    width: 170px;
  }
  
  @media(min-width: ${sizes.tablet}) {
    width: 178px;
  }
  
  &::after {
  content:"\f107";
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  padding: 12px 8px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  text-align: center;
  pointer-events: none;
`
const Wrapper = styled.div`
  margin-top: 24px;
  
  @media(min-width: ${sizes.mobile}) and (max-width: ${sizes.tablet}) {
    margin-top: 33px;
  }
`


export const DropdownContainer = ({ title, change, children }) => (
  <Wrapper>
    <Label>{ title }</Label>
    <ArrowWrapper>
      <SizeDropdown onChange={ change }>
        { children }
      </SizeDropdown>
    </ArrowWrapper>
  </Wrapper>
)