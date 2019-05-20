import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles'
import { Label } from "./Label"

const SizeDropdown = styled.select`
  height: 44px;
  border: solid 1px ${colors.lightGray};   
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 10px;
    
  @media(max-width: 1440px) {
    width: 178px;
  }
  @media(max-width: 768px) {
    width: 170px;
  }
  @media(max-width: 480px) {
    width: 160px;
  }
`

const Wrapper = styled.label`
  overflow: hidden; 
  height: 44px;    
  position: relative;
  display: block;
  
  @media(max-width: 1440px) {
    width: 178px;
  }
  @media(max-width: 768px) {
    width: 170px;
  }
  @media(max-width: 480px) {
    width: 160px;
  }
    &:after {
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

export const DropdownContainer = ({ title, children }) => (
  <div>
    <Label>
      { title }
    </Label>
    <Wrapper>
      <SizeDropdown>
        { children }
      </SizeDropdown>
    </Wrapper>
  </div>

)