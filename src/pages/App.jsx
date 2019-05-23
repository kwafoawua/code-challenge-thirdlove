import React from 'react'
import { hot, setConfig } from 'react-hot-loader'
import {
  AddButton, ColorCircle, ColorCircleContainer, Container, DropdownContainer, HorizontalRule,
  InnerContainer, Label, Price, Title, PhotoGallery, DescriptionContainer,
  InfoContainer } from '../components/index'
import { colors } from '../common'
import { Global, css } from '@emotion/core'

setConfig({ pureSFC: true })

const App = () => (
  <Container>
    <Global
      styles={css`
        body {
          margin: 0 !important;
        }
      `}
    />
    <Title>24/7 Classic Perfect Coverage Bra</Title>
    <Price>$68</Price>
    <PhotoGallery
      /* eslint-disable-next-line max-len */
      src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_1000x.jpg"
    />
    <InfoContainer>
      <InnerContainer display="inline-flex">
        <Label>Color: </Label><Label bold>Naked</Label>
      </InnerContainer>
      <ColorCircleContainer>
        <ColorCircle tabindex="1" color={colors.naked1}/>
        <ColorCircle tabindex="2" color={colors.naked2}/>
        <ColorCircle tabindex="3" color={colors.naked3}/>
        <ColorCircle tabindex="4" color={colors.naked4}/>
        <ColorCircle tabindex="5" color={colors.naked5}/>
      </ColorCircleContainer>
      <InnerContainer display="inline-flex">
        <Label>Stock: </Label><Label bold>20</Label>
      </InnerContainer>
      <InnerContainer display="inline-flex">
        <DropdownContainer title="Band Size">
          <option>1</option>
          <option>2</option>
        </DropdownContainer>
        <DropdownContainer title="Cup Size">
          <option>1</option>
          <option>2</option>
        </DropdownContainer>
      </InnerContainer>
      <AddButton>Add to Bag</AddButton>
    </InfoContainer>

    <DescriptionContainer>
      <Label bold>Details</Label>
      <HorizontalRule/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate veli.</p>
      <ul>
        <li>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi.
        </li>
        <li>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atq exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi.
        </li>
        <li>
          Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </li>
      </ul>
    </DescriptionContainer>

  </Container>
)

export default hot(module)(App)